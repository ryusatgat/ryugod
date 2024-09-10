docker container prune -f
docker run --name oracle -d \
	-p 0.0.0.0:1521:1521 \
	-e ORACLE_PWD=ryugod \
	-e ORACLE_CHARACTERSET=KOREAN_KOREA.KO16MSWIN949 \
	container-registry.oracle.com/database/free:latest
sleep 60
docker container cp ot_schema.sql oracle:/
docker container cp ot_data.sql oracle:/

docker exec -i oracle sqlplus / as sysdba << EOF
ALTER SESSION SET CONTAINER = freepdb1;
CREATE USER ryugod IDENTIFIED BY ryugod;
GRANT CONNECT, RESOURCE, DBA TO ryugod;
EOF

docker exec -i oracle sqlplus ryugod/ryugod@freepdb1 << EOF
@/ot_schema.sql
@/ot_data.sql
EOF

