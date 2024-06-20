# Use an official Node.js image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy your HTML and JavaScript files into the container
COPY index.html .
COPY app.js .

# Install a simple HTTP server (you can replace this with any other server)
RUN npm install -g http-server

# Expose port 80 (optional, if your app runs on a different port, adjust accordingly)
EXPOSE 80

# Define the command to start your app
CMD ["http-server", "-p", "80"]
