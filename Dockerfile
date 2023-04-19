FROM node:18
WORKDIR /web-server
CMD ["src/app.js","start"]
EXPOSE port
