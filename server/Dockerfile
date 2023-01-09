FROM node:10-alpine

RUN mkdir -p /src

COPY package.json src/package.json

WORKDIR /src

RUN npm install -g knex
RUN npm install --only=production --silent

COPY . /src

EXPOSE 41234/udp

CMD npm run dev
