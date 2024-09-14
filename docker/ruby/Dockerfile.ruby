ARG FROM_IMAGE=ryusatgat/ubuntu
FROM $FROM_IMAGE

RUN apt install -y ruby-full
RUN cd /opt && curl -s -L forter.zip https://github.com/judofyr/forter/archive/refs/heads/master.zip > forter.zip && unzip forter.zip && mv forter-master forter && rm -f forter.zip && ln -s /opt/forter/bin/forter /usr/local/bin

ADD opt /opt/
ADD usr /usr/
    
USER $USERNAME
