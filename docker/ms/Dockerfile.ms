ARG FROM_IMAGE=ryusatgat/ubuntu
FROM $FROM_IMAGE    

ENV MSSQL_PID=Express
ENV MSSQL_SA_PASSWORD=cnl1c2F0Z2F0LXNxbHNlcnZlcg==
ENV MSSQL_TCP_PORT=1234

RUN apt update && apt upgrade -y
RUN apt install -y dotnet-sdk-8.0 powershell
RUN apt install -y curl
RUN mkdir /opt/dotnet && curl -s -L https://download.visualstudio.microsoft.com/download/pr/3b2b3c23-574b-45d7-b2b0-c67f0e935308/23ed647eb71a8f07414124422c15927d/dotnet-sdk-9.0.100-rc.1.24452.12-linux-x64.tar.gz | \
    tar xvz -C /opt/dotnet

ADD opt /opt/
ADD usr /usr/

USER ryugod
RUN dotnet tool install --global P
ENV PATH="$PATH:$HOME/.dotnet/tools"


ENTRYPOINT /bin/bash
