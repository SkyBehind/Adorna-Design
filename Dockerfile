FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Install serve to run the production build
RUN npm install -g serve

# Expose port 3000 (will be mapped by docker-compose)
EXPOSE 3000

# Start the application with host binding
CMD ["serve", "-s", "dist", "-l", "3000", "--host", "0.0.0.0"]
