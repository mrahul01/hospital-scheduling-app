FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for both client and server
COPY package.json ./
COPY client/package.json ./client/
COPY server/package.json ./server/

# Install dependencies for both client and server
RUN npm install --prefix client
RUN npm install --prefix server

# Copy the rest of the application code
COPY . .

# Build the client application
RUN npm run build --prefix client

# Expose the port the app runs on
EXPOSE 5000

# Start the server
CMD ["npm", "start", "--prefix", "server"]