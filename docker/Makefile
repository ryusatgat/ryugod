MAKECMDGOALS ?= base
TARGET=$(MAKECMDGOALS)
DOCKERIMAGE=ryusatgat/$(TARGET)
DOCKERFILE_TAG=

ifeq ($(TARGET),ms)
	FROM_IMAGE=mcr.microsoft.com/mssql/server:2022-latest
	GRAND_IMAGE=$(DOCKERIMAGE)
else ifeq ($(TARGET),ubuntu1404)
	FROM_IMAGE=ubuntu:14.04
	GRAND_IMAGE=$(DOCKERIMAGE)
else ifeq ($(TARGET),ubuntu2004)
	FROM_IMAGE=ubuntu:20.04
	GRAND_IMAGE=$(DOCKERIMAGE)
else ifeq ($(TARGET),ubuntu2204)
	FROM_IMAGE=ubuntu:22.04
	GRAND_IMAGE=$(DOCKERIMAGE)
else ifeq ($(TARGET),gentoo)
	FROM_IMAGE=gentoo/portage
	DOCKERFILE_TAG=_gentoo
	GRAND_IMAGE=$(DOCKERIMAGE)
else ifeq ($(TARGET),kali)
	FROM_IMAGE=kalilinux/kali-rolling 
	GRAND_IMAGE=$(DOCKERIMAGE)
else ifeq ($(TARGET),rocky9)
	FROM_IMAGE=rockylinux:9
	DOCKERFILE_TAG=_rhel
	GRAND_IMAGE=$(DOCKERIMAGE)
else ifeq ($(TARGET),arch)
	FROM_IMAGE=archlinux
	DOCKERFILE_TAG=_arch
	GRAND_IMAGE=$(DOCKERIMAGE)
else
	FROM_IMAGE=ubuntu:latest
	GRAND_IMAGE=ryusatgat/ubuntu
endif

$(TARGET):	$(PWD)/$(TARGET)/Dockerfile

$(PWD)/$(TARGET)/Dockerfile: $(PWD)/$(TARGET)/Dockerfile.$(TARGET) $(GRAND_IMAGE)
	ionice -c 3 docker build -t $(DOCKERIMAGE) -f $(TARGET)/Dockerfile.$(TARGET) --build-arg FROM_IMAGE=$(GRAND_IMAGE) $(TARGET)

$(GRAND_IMAGE):
	ionice -c 3 docker build -t $(GRAND_IMAGE) -f in/Dockerfile.in$(DOCKERFILE_TAG) --build-arg FROM_IMAGE=$(FROM_IMAGE) in
