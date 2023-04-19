## Example 3: Deploying a Node.js project with Docker

This readme explains how to deploy a Node.js project with Docker.

### Creating a Dockerfile

The first step in deploying a Node.js project with Docker is to create a Dockerfile. A Dockerfile is a text document that contains all the commands needed to build a Docker image.

Here's an example Dockerfile that you can use to deploy a Node.js application:

```
FROM node:18.14.0

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY app /app

# Install nodemon for debugging
RUN npm install -g nodemon

# Install app dependencies
RUN npm install

# Expose port 8000 for the app to listen on
EXPOSE 8000

# Run the application
CMD ["node", "index.js"]
```

Let's go over what each of these commands does:

- `FROM`: This command sets the base image for the Dockerfile. In this case, we're using the official Node.js 18.14.0 image.

- `WORKDIR`: This command sets the working directory for the application inside the container. We're setting it to `/app`.

- `COPY`: This command copies the application files from `/app` folder of the host machine to the `/app` folder in the container.

- `RUN`: This command runs a command inside the container. In this case, we're installing `nodemon` and the app dependencies that are stablished in the ``package.json`` file.

- `EXPOSE`: This command exposes port 8000 for the application to listen on.

- `CMD`: This command specifies the command that should be run when the container starts. In this case, we're running the `node` command to start the application.

### Building the image

To build the image, run the following command in the directory where the Dockerfile is located:

```
docker build -t node_hello_world .
```

### Running the container

To run the container, use the following command:

```
docker run -it --rm --name node_hello_world -p 8000:8000 node_hello_world:latest
```

This will start a new container with the name "node_hello_world" and map the container's port 8000 to the host's port 8000. 

You can now access your Node.js application by navigating to http://localhost:8000 in your web browser.