## Docker example 1

# Para traerme una imagen del dockerhub

docker pull node

docker run node:latest


# Si creo otra imagen entonces se crea con un nombre genérico para agregarle un nombre entonces debo decírselo con el comando --name

docker run --name node_test node:latest 


# Pero y que hago con esto, para hacerlo interactivo debo decírselo con el comando -it


docker run -it --name node_test node:latest 

# Pero al tratar de crear un contenedor con el mismo nombre tengo problemas por lo tanto debo borrar el anterior por lo tanto le agregamos el comando --rm

docker run --rm -it --name node_test node:latest



