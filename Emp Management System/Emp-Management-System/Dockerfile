#FROM ubuntu:latest
#LABEL authors="Vikas Kumar"
#
#ENTRYPOINT ["top", "-b"]


FROM eclipse-temurin:21-jdk
COPY target/DockerImage.jar DockerImage.jar
ENTRYPOINT ["java", "-jar", "/DockerImage.jar"]
