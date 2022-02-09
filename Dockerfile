FROM node:14

COPY . /app

RUN npm install mysql

ENTRYPOINT [ "node", "app/index.js" ]