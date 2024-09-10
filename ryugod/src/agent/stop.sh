#!/bin/bash

for i in `ps -ef | grep ragent | grep -v grep | awk '{print $2}'`
do
	kill $i && echo "send kill signal to PID $i"
done
