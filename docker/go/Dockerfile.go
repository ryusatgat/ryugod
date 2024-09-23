ARG FROM_IMAGE=ryusatgat/ubuntu
FROM $FROM_IMAGE

RUN apt install -y golang-go make

ADD opt /opt/

USER $USERNAME
