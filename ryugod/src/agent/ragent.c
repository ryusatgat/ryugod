#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <signal.h>
#include <string.h>
#include <errno.h>
#include<dirent.h>
#include <linux/limits.h>
#include <sys/stat.h>
#include "ragent.h"

static const char NEWLINE[] = "\n";
static const char OK[] = "0\n";
static const char FAIL[] = "1\n";

void sig_alarm(int signal)
{
    exit(0);
}

static void writeError(int fd)
{
    char *err = strerror(errno);
    write(fd, FAIL, sizeof(FAIL));
    write(fd, err, strnlen(err, PATH_MAX));
    write(fd, NEWLINE, sizeof(NEWLINE));
}

static int recvFile(int fd, const char *path)
{
    FILE *fp;
    char ssz[16];
    char buf[BUFSIZ];
    size_t sz;
    ssize_t len;
    
    if((fp = fopen(path, "wb")) == NULL) {
        writeError(fd);
        return -1;
    }

    write(fd, OK, sizeof(OK));

    readLine(fd, ssz, sizeof(ssz));
    sz = (size_t)atol(ssz);

    while (sz>0) {
        len = read(fd, buf, BUFSIZ);
        if (len < 0) {
            if (errno == EINTR || errno == EAGAIN)
                continue;
            else
                break;
        } 
        fwrite(buf, 1, len, fp);
    }

    fclose(fp);
    return 0;
}

static int sendFile(int fd, const char *path)
{
    FILE *fp;
    char ssz[16];
    char buf[BUFSIZ];
    size_t sz;
    ssize_t len;
    
    if((fp = fopen(path, "rb")) == NULL) {
        writeError(fd);
        return -1;
    }

    sz = ftell(fp);
    snprintf(ssz, sizeof(ssz), "%ld", sz);

    write(fd, OK, sizeof(OK));
    write(fd, NEWLINE, sizeof(NEWLINE));
    write(fd, ssz, strnlen(ssz, sizeof(ssz)));
    write(fd, NEWLINE, sizeof(NEWLINE));

    while (!feof(fp)) {
        len = fread(buf, 1, BUFSIZ, fp);
        write(fd, buf, len);
    }

    fclose(fp);
    return 0;
}

static int listDir(int fd, const char *path)
{
    DIR * dir = NULL;
    struct dirent * entry = NULL;
    struct stat fstat;
    char ftype;

    if((dir = opendir(path)) == NULL) {
        writeError(fd);
        return -1;
    }

    write(fd, OK, sizeof(OK));

    while((entry = readdir(dir)) != NULL) {
        stat(entry->d_name, &fstat);
        if (S_ISLNK(fstat.st_mode))
            lstat(entry->d_name, &fstat);
        ftype = S_ISDIR(fstat.st_mode) ? 'D' : 'R';

        write(fd, &ftype, 1);
        write(fd, entry->d_name, strnlen(entry->d_name, PATH_MAX));
        write(fd, NEWLINE, sizeof(NEWLINE));
    }
    write(fd, "!\n", 2);
    closedir(dir);

    return 0;
}

static int ragent(int fd)
{
    char fg[1+1];
    char buf[BUFSIZ];

    signal(SIGALRM, sig_alarm);
    
    for (;;) {
        alarm(0);
        readLine(fd, fg, sizeof(fg));
        alarm(10);

        switch (*fg) {
        case 'G': // get
            sendFile(fd, buf);
            break;
        case 'P': // put
            readLine(fd, buf, sizeof(buf));
            recvFile(fd, buf);
            break;
        case 'C': // change directory
            readLine(fd, buf, sizeof(buf));
            if (chdir(buf) == 0)
                write(fd, OK, sizeof(OK));
            else
                writeError(fd);
            break;
        case 'L': // ls
            readLine(fd, buf, sizeof(buf));
            listDir(fd, buf);
            break;
        case 'H': // ping
            write(fd, OK, sizeof(OK));
            break;
        case 'W': // pwd
            write(fd, OK, sizeof(OK));
            getcwd(buf, sizeof(buf));
            write(fd, buf, strnlen(buf, PATH_MAX));
            write(fd, NEWLINE, sizeof(NEWLINE));
            break;
        case 'Q': // quit
        default:
            close(fd);
            return 0;
        }
    }
}

int main()
{
    makeDaemon();
    procServer(8000, ragent);

    return 0;
}