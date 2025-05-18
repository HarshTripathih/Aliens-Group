FROM node:22.15.0-alpine AS base
WORKDIR /src/app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm usn build
EXPOSE 3000
CMD [ "npm","run","start" ]