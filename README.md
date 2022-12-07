# How to run

Run `npm install`

Run `node .`  to start the application


# Getting Started with Docker


## View Docker Machines

docker -H tcp://172.25.212.94 images --all

## Build Docker Machine 

docker -H tcp://172.25.212.94 build -t donvit79/mern-back .

## Publish Docker Machine

docker -H tcp://172.25.212.94 push donvit79/mern-back

Note: you have to login to hub.docker.com with command docker -H tcp://172.25.212.94 login

## Run Docker Container 

 docker -H tcp://172.25.212.94 -d --rm --name mern-k8s-back -p 5000:5000 -e PORT=5000 -e CON_STR="mongodb+srv://user:pass@cluster0.jg9pju5.mongodb.net/?retryWrites=true&w=majority" donvit79/mern-back 

## View Docker Containers

docker -H tcp://172.25.212.94 container ls

## View Docker Containers running

PS C:\projects\mern\front> docker -H tcp://172.25.212.94 ps

