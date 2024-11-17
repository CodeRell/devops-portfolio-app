# Step 1: Use Node.js base image for building the app
FROM node:16 AS builder

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy only package files first
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install --legacy-peer-deps

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the React app
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN npm run build

# Step 7: Use a lightweight Nginx image to serve the built files
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Step 8: Expose port 80 for the web server
EXPOSE 80

# Step 9: Start Nginx
CMD ["nginx", "-g", "daemon off;"]
