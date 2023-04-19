FROM node AS src
RUN mkdir -p /node/web-server
ADD src/ /node/web-server
WORKDIR /node/web-server
RUN npm install

FROM node:alpine
ARG APP_VERSION=V1.1
LABEL org.label-schema.version=$APP_VERSION
ENV NODE_ENV="production"
COPY --from=source /node/web-server /node/web-server
WORKDIR /node/web-server
EXPOSE 3000
ENTRYPOINT ["./bin/www"]
