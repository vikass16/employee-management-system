# I'm going to Share How to start with Docker
1. You have to be ready with your Dockerfile and Docker-compose.yml file
2. After Completion of these file you have to Add <Finalname>Name of jar file</FinalName> in pom.xml file between <build> <plugin>
3. And now you have to run command like : mvn clean package

Now your jar file is ready. You have to dockerized it now.
Then you have to play with commands like these.

1. to check images : docker images
2. to check running containers : docker ps
3. to check all containers : docker ps -a
4. to delete image : docker rmi image_id
5. to delete container : docker rm container_name/container_id
6. to create image (only once) : docker compose build
7. to run container : docker compose up
8. to stop and remove all container : docker compose down
9. to stop containers and also remove data : docker compose down -v
10. to stop container but not remove : docker compose stop
11. to start stopped containers : docker compose start