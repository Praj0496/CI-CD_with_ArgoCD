# Use an official Node.js image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy your JavaScript files into the container
COPY app.js /app/app.js

# Specify the command to run your Node.js application within the container
CMD ["node", "app.js"]
