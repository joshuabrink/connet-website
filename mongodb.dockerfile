
FROM 		debian:bullseye

ARG         PACKAGES="nodejs npm net-tools"

ENV 		MONGO_USERNAME root
ENV 		MONGO_PASSWORD root
ENV 		MONGO_HOSTNAME localhost
ENV 		MONGO_PORT 27017
ENV 		MONGO_DB connet-db
ENV 		NODE_ENV production

RUN apt-get update; apt-get install -y wget gnupg $PACKAGES
RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -
RUN echo "deb http://repo.mongodb.org/apt/debian bullseye/mongodb-org/4.4 main" > /etc/apt/sources.list.d/mongodb-org-4.4.list
RUN apt-get update; apt-get install -y mongodb-org

COPY docker-entrypoint.sh /usr/local/bin/
# ENTRYPOINT ["docker-entrypoint.sh"]
RUN mkdir -p /data/db
RUN mongod --fork --logpath /var/log/mongod.log

WORKDIR     /var/www
COPY        package.json package-lock.json ./
RUN         npm install

	ENV MONGO_USERNAME=root
	ENV MONGO_PASSWORD=root
	ENV MONGO_DB=connet-db
	ENV MONGO_PORT=27017
	ENV MONGO_HOSTNAME=127.0.0.1
COPY        . ./

# EXPOSE      $PORT
EXPOSE      8080
# EXPOSE      27017

# check if the mongo server is up
# CMD ["mongo", "--version"]
# RUN ls /usr/bin
# CMD [ "ls", "/usr/bin" ]
# RUN chmod +x /usr/bin/mongod
# RUN /usr/bin/mongod --fork --syslog
# CMD [ "mongosh", "--version" ]
CMD [ "cat", "/var/log/mongod.log"]
# CMD  [ "./wait-for.sh", "127.0.0.1:27017", "--", "node", "app.js" ]
# CMD  [ "node", "app.js" ]
# CMD [ "netstat", "-tulpn" ]
# CMD [ "" ]
# RUN chown `whoami` /tmp/mongodb-27017.sock
# CMD ["mongo"]

# check if the mongo server is up
# CMD ["netstat", "-tulpn"]
