#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <sys/wait.h>
#include <fcntl.h>
#include <signal.h>

void onTerminated(int signal) {
    pid_t pid;
    int status;

    switch (signal) {
    case SIGCHLD:
        while ((pid = waitpid(-1, &status, WNOHANG)) > 0) {
            if (WIFEXITED(status)) {
                // child process terminated normally : WEXITSTATUS(status)
            } else if (WIFSIGNALED(status)) {
                // child process terminated with a signal : WTERMSIG(status)
            }
        }
        break;
    }
}


int makeDaemon() {
    pid_t pid;
    struct sigaction sa;

    sa.sa_handler = onTerminated;
    sigemptyset(&sa.sa_mask);
    sa.sa_flags = SA_RESTART;

    if (sigaction(SIGCHLD, &sa, NULL) == -1) {
        perror("sigaction");
        exit(1);
    }

    pid = fork();
    if (pid < 0) {
        perror("fork");
        exit(1);
    }

    if (pid > 0)
        exit(0);

    umask(0);

    if (setsid() < 0) {
        perror("setsid");
        exit(1);
    }

    if (chdir("/") < 0) {
        perror("Error on chdir");
        exit(1);
    }
/*
    close(STDIN_FILENO);
    close(STDOUT_FILENO);
    close(STDERR_FILENO);
*/
    return 0;
}