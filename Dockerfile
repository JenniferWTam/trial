FROM node:slim

LABEL Mitch, mshumway1211@gmail.com

WORKDIR /app

COPY index.js app/index.js

COPY package.json ./package.json

RUN npm install