## Example 3: How to charge my project to docker

# At this moment we could initialite a docker container but how  can i use it for my project, at this moment we're gonna make a hello world for node 

# We first initialite a dockerfile with Node version 

FROM node:18.14.0

# We are going to use the WORKDIR for set our work directory
WORKDIR /app

# We are going to copy the application 
COPY app /app


# Now we're going to RUN a command for install a nodemon dependencie for debugging

RUN npm install -g nodemon


RUN cd /app && npm install 

# Now we're going to expose one port for this application

EXPOSE 8000

# Finish starting a bash command line or pushing the commands to run hello world server 

CMD ["bash"]
CMD ["node", "index.js"]

# We finish compiling and running our image with docker build command on terminal 

docker build -t node_hello_world .
docker run -it --rm --name node_hello_world -p 8000:8000 node_hello_world:latest
