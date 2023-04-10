## Dockerfile

This readme explains how to compile a Docker image using a Dockerfile.

### Building the image

To compile an image using a Dockerfile, run the following command in the directory where the Dockerfile is located:

```
docker build -t [image_name]:[tag] .
```

In this example, we are compiling a node 18 image for our use, so we would run:

```
docker build -t node_test:latest .
```

Note that we add "latest" to the tag to indicate that this is the most up-to-date version of the image.

### Running a container

To run a container using the newly created image, use the following command:

```
docker run --rm -it --name [container_name] [image_name]
```

For example, to run a container using the node_test image, use:

```
docker run --rm -it --name docker_run_build_example node_test
```

This will start a new container with the specified name and image.