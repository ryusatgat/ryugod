ARG FROM_IMAGE=ryusatgat/ubuntu
FROM $FROM_IMAGE

RUN curl -s -L https://github.com/adam-mcdaniel/sage/releases/download/v1.1.0-alpha/sage_linux_v1.1.0-alpha > /usr/local/bin/sage && chmod 755 /usr/local/bin/sage

USER $USERNAME
