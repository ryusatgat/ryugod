#!/bin/bash

for i in `ls */Dockerfile.*`
do
  TARGET=$(basename $i)

  echo "------------> Building image $TARGET... <------------"
  make $TARGET
done
