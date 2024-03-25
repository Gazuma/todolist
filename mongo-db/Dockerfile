FROM mongo

ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=password

VOLUME /data/db

EXPOSE 27017

CMD ["mongod"]

# docker run -p 27017:27017 -v gazuma:/data/db -d my-mongo
