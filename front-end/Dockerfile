# Stage 1: Build the React app
FROM node:18 as react-build

WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the React app source code
COPY . .

# Build the production-ready React app
RUN npm run build

# Stage 2: Serve the React app using Nginx
FROM nginx:latest

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy the built React app from the previous stage to the Nginx container
COPY --from=react-build /app/dist .

# # Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
