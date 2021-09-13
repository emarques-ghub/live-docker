FROM node:14

COPY . /app

ENTRYPOINT [ "node", "app/index.js" ]