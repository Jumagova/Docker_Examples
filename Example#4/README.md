## Example 4: Building and running a Node.js app in a Docker container

This example shows how to build and run a Node.js app in a Docker container. We will use a `Dockerfile` to define the container, a `run.sh` script to run the container, and an `autostart` script to start the Node.js app when the container is started.

### Prerequisites

- Docker installed on your machine
- Basic understanding of Node.js

### Setup

1. Create a new directory for your project and navigate into it.

2. Create a `Dockerfile` with the following content:

    ```dockerfile
    FROM node:18.14.0

    RUN npm install -g nodemon

    COPY ./autostart.sh /

    RUN chmod +x /autostart.sh

    CMD ["sh", "autostart.sh"]
    ```

    This Dockerfile starts from a Node.js image, installs the `nodemon` package globally, copies the `autostart.sh` script to the container, sets execute permissions on the script, and then runs the script as the entrypoint when the container starts.

3. Create an `autostart.sh` file with the following content:

    ```bash
    #!/bin/bash

    cd /app && npm install http && nodemon index.js
    ```

    This script installs the `http` package and starts the Node.js app using `nodemon`.

4. Create a `run.sh` script with the following content:

    ```bash
    #!/bin/bash

    set -e

    PROJECT_ROOT="$(cd "$(dirname "$0")"; cd ..; pwd)"
    source ${PROJECT_ROOT}/config.sh

    docker run -it \
      -p ${SERVER_PORT}:${SERVER_PORT}  \
      --volume ${PROJECT_ROOT}/app:/app \
      --name ${PROJECT_NAME} \
      --rm \
      ${PROJECT_NAME}
    ```

    This script sets the `PROJECT_ROOT` variable to the absolute path of the project root directory, sources the `config.sh` file, and then runs a Docker container with the following options:

    - `-p ${SERVER_PORT}:${SERVER_PORT}`: maps the container's port `8000` to the host's port `8000`
    - `--volume ${PROJECT_ROOT}/app:/app`: mounts the `app` directory from the host to the `/app` directory in the container
    - `--name ${PROJECT_NAME}`: sets the name of the container to `hello_world_node_container`
    - `--rm`: removes the container when it is stopped
    - `${PROJECT_NAME}`: the name of the Docker image to use for the container

5. Create a `config.sh` file with the following content:

    ```bash
    #!/bin/bash

    PROJECT_NAME="hello_world_node_container"
    SERVER_PORT=8000
    ```

    This file sets the `PROJECT_NAME` and `SERVER_PORT` variables used in the `run.sh` script.

### Build and run the container

1. Build the Docker image using the following command:

    ```bash
    ./build.sh
    ```

    This will create a Docker image with the name `hello_world_node_container`.

2. Start the container using the following command:

    ```bash
    ./run.sh
    ```

    This will start the Docker container and mount the `app` directory from the host into the container. The Node.js app will start automatically using `nodemon`.

3. Visit `http://localhost:8000` in your browser to see the running app.

That's it! You now have a Node.js app running in a Docker container.