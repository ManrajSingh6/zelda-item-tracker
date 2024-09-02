# Base image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose container port
EXPOSE 8080

CMD [ "npm", "start"]
