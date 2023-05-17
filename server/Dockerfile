FROM node:16

# Sets the Working Directory as "/server"
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN yarn install --silent
# Copies the entire source code into "/server"
COPY . .

# Specifies the port the node app will be running on
EXPOSE 5000

# Runs "node server.js" after the above step is completed
CMD ["yarn", "start"]