# Step 1: Use a Node.js base image
FROM node:16

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package files to the container
# This allows Docker to cache npm install if package.json hasn't changed.
COPY package.json package-lock.json ./

# Step 4: Install backend dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Expose the backend service port (5000 in this case)
EXPOSE 5000

# Step 7: Specify the command to start the backend service
CMD ["npm", "start"]
