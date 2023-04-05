## Dockerfile

# When you try to compile an image, you must use command docker build for read you Dockerfile and make and image for it, in this case we're going to compile node 18 image for our use, we must to run this command in the directory where dockerfile is located

docker build -t [name of image]:latest . 

# In this case we're going to use 

docker build -t node_test:lastest . 

# note: we add latest for say to docker that will be the last image that we create

# We should run a container with docker run command 
docker run --rm -it --name docker_run_build_example node_test
