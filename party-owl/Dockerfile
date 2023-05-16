# Dockerfile for React client

# Build react client
FROM node:10.16-alpine

# Working directory be app
WORKDIR /usr/src/app

COPY package*.json ./

###  Installing dependencies

RUN yarn install --ignore-engines --silent

# copy local files to app folder
COPY . .

CMD ["yarn","start"]