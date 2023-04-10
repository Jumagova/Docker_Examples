## Example 1: Basic Docker commands

This example provides basic commands to interact with Docker. It shows how to pull an image from Docker Hub and run a container with that image. It also covers some options like creating a container with a custom name and making it interactive.

## Example 2: Building a Docker image from a Dockerfile

This example shows how to create a Dockerfile that specifies the requirements for building a NodeJS application. It includes instructions for installing dependencies and exposing a port. It also demonstrates how to build an image from the Dockerfile and run a container with it.

## Example 3: Building a Docker image for a NodeJS application

This example expands on Example 2 by providing a more detailed Dockerfile for building a NodeJS application. It shows how to use the WORKDIR and COPY commands to set up the application's directory structure and copy its files into the container. It also includes instructions for installing dependencies and exposing a port. Finally, it demonstrates how to run a container with the built image and map its port to the host machine.

## Example 4: Building a Docker image for a NodeJS application with an autostart script

This example demonstrates how to use a script to automatically start a NodeJS application when a Docker container is run. It provides a Dockerfile that includes instructions for installing dependencies and copying the autostart script into the container. It also shows shows how to use shell scripts to automate the build and run processes for a Docker image. It includes a build.sh script that builds the Docker image from a Dockerfile and a run.sh script that runs the container with the built image. The scripts use variables defined in a config.sh file to set project-specific options like the name of the image and the port to expose. Finally, it demonstrates how to run the scripts from the command line to build and run the Docker image.