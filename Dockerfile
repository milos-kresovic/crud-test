# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Define NODE_ENV as a build argument
ARG NODE_ENV

# Set NODE_ENV as an environment variable
ENV NODE_ENV ${NODE_ENV}

# Copy package.json and package-lock.json to the working directory
COPY package*.json yarn.lock ./

# Install the application's dependencies inside the Docker image
RUN yarn --frozen-lockfile

# Copy the rest of the application to the working directory
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Define the command to run the application
CMD yarn start:$NODE_ENV