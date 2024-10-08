ARG FROM_IMAGE=ryusatgat/ubuntu
FROM $FROM_IMAGE

RUN apt install -y lua5.4

ADD opt /opt/
ADD usr /usr/

USER $USERNAME
