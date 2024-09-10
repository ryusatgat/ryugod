#ifndef RAGENT_H_
#define RAGENT_H_

#include <sys/types.h>

typedef int (*RAGENT_PROC)(int);

extern ssize_t readLine(int, char *, size_t);
extern int makeDaemon(void);
extern int procServer(int, RAGENT_PROC);

#endif