FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=hospital
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=root

COPY sample.sql /docker-entrypoint-initdb.d/

EXPOSE 3306
