# Use the official Node.js image as a base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Expose the port that Vite will run on (default is 3000)
EXPOSE 3000

# Command to run the development server
CMD ["npm", "run", "dev"]
