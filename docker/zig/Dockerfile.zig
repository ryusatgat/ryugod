ARG FROM_IMAGE=ryusatgat/ubuntu
FROM $FROM_IMAGE

RUN curl -s -L https://ziglang.org/builds/zig-linux-x86_64-0.14.0-dev.1550+4fba7336a.tar.xz | tar xvJ --transform 's/^zig-linux-x86_64-0.14.0-dev.1550+4fba7336a/zig/' -C /opt && ln -s /opt/zig/zig /usr/local/bin

USER $USERNAME
