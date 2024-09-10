MAKECMDGOALS ?= base
TARGET=$(MAKECMDGOALS)
DOCKERIMAGE=ryusatgat/$(TARGET)
DOCKERFILE_TAG=

ifeq ($(TARGET),ms)
	FROM_IMAGE=mcr.microsoft.com/mssql/server:2022-latest
else ifeq ($(TARGET),legacy)
	FROM_IMAGE=ubuntu:14.04
else ifeq ($(TARGET),ubuntu2004)
	FROM_IMAGE=ubuntu:20.04
else ifeq ($(TARGET),2204)
	FROM_IMAGE=ubuntu:22.04
else ifeq ($(TARGET),gentoo)
	FROM_IMAGE=gentoo/portage
	DOCKERFILE_TAG=_gentoo
else ifeq ($(TARGET),kali)
	FROM_IMAGE=kalilinux/kali-rolling 
else ifeq ($(TARGET),rocky9)
	FROM_IMAGE=rockylinux:9
	DOCKERFILE_TAG=_rhel
else ifeq ($(TARGET),arch)
	FROM_IMAGE=archlinux
	DOCKERFILE_TAG=_arch
else
	FROM_IMAGE=ubuntu:latest
endif

$(TARGET): Dockerfile.$(TARGET)
	cat Dockerfile.in$(DOCKERFILE_TAG) Dockerfile.$(TARGET) > Dockerfile
	nice -n 20 ionice -c 3 docker build -t $(DOCKERIMAGE) --build-arg FROM_IMAGE=$(FROM_IMAGE) . && rm -f Dockerfile
