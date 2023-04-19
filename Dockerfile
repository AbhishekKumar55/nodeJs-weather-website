FROM node:18
WORKDIR /web-server
CMD ["src/app.js","start"]
EXPOSE 8080
docker run -d -p 8081:80 nginx:alpine
