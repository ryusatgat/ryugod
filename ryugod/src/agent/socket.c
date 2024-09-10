#include <stdio.h>
#include <unistd.h>
#include <errno.h>
#include <stdlib.h>
#include <fcntl.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include "ragent.h"

ssize_t readLine(int fd, char *buf, size_t n)
{
    ssize_t nRead = 0;
    size_t sRead = 0;
    char c;

    if (n <= 0)
        return -1;

    for (;;) {
        nRead = read(fd, &c, 1);
        if (nRead <0) {
            if (errno == EINTR || errno == EAGAIN)
                continue;
            else
                break;
        }
        else {
            if (c == '\r')
                continue;
            if (c == '\n')
                break;

            if (sRead < n-1) {
                sRead++;
                *buf++ = c;
            }
        }
    }

    *buf = '\0';

    return sRead;
}

int procServer(int portno, RAGENT_PROC proc)
{
    int sockfd, nfd, len, pid;
    struct sockaddr_in serv_addr, cli_addr;
    int optval = 1;

    sockfd = socket(AF_INET, SOCK_STREAM, 0);
    if (sockfd < 0) {
        perror("socket");
        exit(1);
    }

    setsockopt(sockfd, SOL_SOCKET, SO_REUSEADDR, &optval, sizeof(optval));

    serv_addr.sin_family = AF_INET;
    serv_addr.sin_addr.s_addr = INADDR_ANY;
    serv_addr.sin_port = htons(portno);

    if (bind(sockfd, (struct sockaddr *) &serv_addr, sizeof(serv_addr)) < 0) {
        perror("bind");
        exit(1);
    }

    listen(sockfd, 10);

    len = sizeof(cli_addr);

    for (;;) {
        nfd = accept(sockfd, (struct sockaddr *)&cli_addr, &len);
        if (nfd < 0) {            
            perror("accept");
            close(sockfd);
            exit(1);
        }

        pid = fork();
        if (pid < 0) {            
            perror("fork");
            close(sockfd);
            exit(1);
        }

        if (pid == 0) { // child
            close(sockfd);
            exit(proc(nfd));
        } else { // parent
            close(nfd);
        }
    }
}