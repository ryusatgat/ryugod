ARG FROM_IMAGE=ryusatgat/ubuntu
FROM $FROM_IMAGE

RUN curl -s -L https://github.com/roc-lang/roc/releases/download/nightly/roc_nightly-linux_x86_64-latest.tar.gz | tar xvz -C /opt && mv /opt/roc* /opt/roc && ln -s /opt/roc/roc /usr/local/bin

USER $USERNAME
