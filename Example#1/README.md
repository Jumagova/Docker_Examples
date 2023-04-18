# Docker Example 1 

This readme explains basic Docker commands for users who want to work with Docker containers and Docker images.

## Pull an image from Docker Hub

To pull an image from Docker Hub, run the following command:

```docker pull node```

This will pull the latest version of the **node** image published in Docker Hub

## Starting a container

To start a container, use:

```docker run node:latest```

## Starting a container with a personalized name

If you want to have and personalized name for your container, use the following command:

```docker run --name node_test node:latest```

## Interactive mode

To work with Docker containers in interactive mode, use the following command:

```docker run -it --name node_test node:latest```

## Removing previous container

When attempting to create a container with the same name as the previous one, problems can arise. To prevent this you can add the ```--rm``` flag to the command, this will start a container and remove it the moment it stops:

```docker run --rm -it --name node_test node:latest```