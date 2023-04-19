FROM node:18.14.0

WORKDIR /app

COPY app /app

RUN npm install -g nodemon

RUN npm install

EXPOSE 8000

CMD ["node", "index.js"]