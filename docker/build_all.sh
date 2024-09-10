#!/bin/bash

for i in `ls Dockerfile.*`
do
  TARGET="${i##*.}"

  echo "-----------> Building image $TARGET..."
  make $TARGET
done
