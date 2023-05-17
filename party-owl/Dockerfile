FROM node:16
# Setting the working directory to "/client"
WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install --silent
# Copies the entire react source code into "/client"
COPY . .

EXPOSE 3000
# Starting the react app
CMD [ "yarn", "start"]