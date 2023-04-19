FROM node:18
WORKDIR /web-server
CMD ["node src/app.js","start"]