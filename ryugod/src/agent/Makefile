CFLAGS=-static
LDFLAGS=

all:	ragent

ragent: ragent.o socket.o daemon.o
	gcc $(LDFLAGS) -o ragent ragent.o socket.o daemon.o

c.o:
	gcc $(CFLAGS) -c $<