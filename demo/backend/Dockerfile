# Dockerfile describes image you want to build
# build Docker container image by extending an existing image
# starts from official Node.js LTS image

FROM node:9.7.1
# WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
