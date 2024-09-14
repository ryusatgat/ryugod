ARG FROM_IMAGE=ryusatgat/ubuntu
FROM $FROM_IMAGE    

ENV MSSQL_PID=Express
ENV MSSQL_SA_PASSWORD=cnl1c2F0Z2F0LXNxbHNlcnZlcg==
ENV MSSQL_TCP_PORT=1234

RUN apt install -y dotnet-sdk-8.0 powershell
RUN curl -s -L https://download.visualstudio.microsoft.com/download/pr/84a39cad-2147-4a3e-b8fd-ec6fca0f80dd/d86fc06f750e758770f5a2237e01f5c5/dotnet-sdk-9.0.100-preview.7.24407.12-linux-x64.tar.gz | tar xvz --transform 's/^dotnet-sdk-9.0.100-preview.7.24407.12-linux-x64/dotnet/' -C /opt

ADD opt /opt/

USER ryugod
RUN dotnet tool install --global P
ENV PATH="$PATH:$HOME/.dotnet/tools"


ENTRYPOINT /bin/bash
