# Step 1: Use a Node.js base image to build the app
FROM node:16 AS builder

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Step 4: Copy the rest of the application code
COPY . .

# Step 5: Build the static files
RUN npm run build

# Step 6: Use a lightweight web server (Nginx) to serve the files
FROM nginx:alpine

# Step 7: Copy the build output to Nginx's default web directory
COPY --from=builder /app/build /usr/share/nginx/html

# Step 8: Expose port 80 for the web server
EXPOSE 80

# Step 9: Start Nginx
CMD ["nginx", "-g", "daemon off;"]
