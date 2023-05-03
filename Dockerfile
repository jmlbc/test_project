FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=mydb
ENV MYSQL_USER=myuser
ENV MYSQL_PASSWORD=123

COPY sample.sql /docker-entrypoint-initdb.d/

EXPOSE 3306
