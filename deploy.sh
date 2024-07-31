#!/bin/bash
# Install dependencies for the backend
echo "Installing backend dependencies..."
pip install --upgrade pip
pip install -r requirements.txt
pip install gunicorn

# Navigate to the frontend directory
cd react-vite

# Install dependencies for the frontend
echo "Installing frontend dependencies..."
npm install

# Build the frontend
echo "Building frontend..."
npm run build

# Navigate back to the project root directory
cd ..

# Copy the built frontend files to the backend static folder
echo "Copying built frontend files to the backend static folder..."
mkdir -p backend/react-vite/dist
cp -r react-vite/dist/* backend/react-vite/dist/

# Run database migrations
echo "Running database migrations..."
flask db upgrade

# Start the backend server using Gunicorn
echo "Starting backend server..."
exec gunicorn --bind 0.0.0.0:8000 backend:app