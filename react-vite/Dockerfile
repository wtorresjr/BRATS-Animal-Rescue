# Use the official Node.js image from the Docker Hub
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY react-vite/package*.json ./

# Install project dependencies
RUN npm install

# COPY ./react-vite/dist/assets ./

# Copy the rest of the application code to the working directory
COPY react-vite .

# Build the React application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["npx", "serve", "dist"]



