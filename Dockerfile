# Build from Node.js v10 image (latest LTS with long term support)
FROM node:10

# Create app directory inside the Node.js image
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source inside the Docker image
COPY . .

# Map Node.js port to Docker deamon
EXPOSE 8080

# Run app
CMD [ "npm", "start" ]