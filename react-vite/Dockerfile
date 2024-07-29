# # Use the official Node image as the base image
# FROM node:18

# # Set the working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package.json package-lock.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the React app
# RUN npm run build

# # Expose the port Vite runs on
# EXPOSE 3000

# # Run the React app
# CMD ["npm", "start"]

# Use the official Node.js image from the Docker Hub
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY react-vite/package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY react-vite .

# Build the React application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["npx", "serve", "dist"]



