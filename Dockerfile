FROM node src/app.js
RUN npm install
EXPOSE 3000
