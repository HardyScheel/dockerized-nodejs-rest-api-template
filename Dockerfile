# Build from Node.js v10 image (latest LTS with long term support):
FROM node:10

# Confirm installation
RUN node -v
RUN npm -v

# Create a directory for your app inside the Node.js image and set as current working directory
WORKDIR /usr/src/app

# Install your app and all dependencies.
# A wildcard is used to ensure both package.json AND package-lock.json are copied where available (npm@5+)
# Copy package.json AND package-lock.json into the current directory of the image.
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