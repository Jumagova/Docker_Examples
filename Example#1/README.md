# Docker Example 1

This readme explains basic Docker commands for users who want to work with Docker containers.

## To pull an image from Docker Hub

To pull an image from Docker Hub, run the following command:

```docker pull node```

To run the image, use:

```docker run node:latest```

## Assigning a name to a created image

If you create another image, it is assigned a generic name. To assign a custom name, use the following command:

```docker run --name node_test node:latest```

## Interactive mode

To work with Docker containers in interactive mode, use the following command:

```docker run -it --name node_test node:latest```

## Removing previous container

When attempting to create a container with the same name as a previous one, problems can arise. To prevent this, remove the previous container using the --rm command:

```docker run --rm -it --name node_test node:latest```