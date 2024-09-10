RUN curl -s -L https://download.swift.org/swift-5.10.1-release/ubuntu2404/swift-5.10.1-RELEASE/swift-5.10.1-RELEASE-ubuntu24.04.tar.gz | tar xvz --transform 's/^swift-5.10.1-RELEASE-ubuntu24.04//' -C /
RUN apt install -y g++ llvm-17
ADD apps/swift/usr /usr/
ADD apps/swift/opt /opt/
    
USER $USERNAME
