# Prod Build Files
This directory contains the scripts to build and package the frontend docker images for a production environment.

Use this command to build the image:
```sh
docker compose build
```

and then run this command to push to the registry:
```sh
docker push apolloxiv/waystar-frontend
```



## process:
The below process seems complex when you're looking at the code, but once you know what it's doing its easy to tell how efficient it is.
 - Docker compose is used in github actions to build the docker image using `docker compose --build`
 - Docker compose, using the environment variables and context set by the file, has now made sure our builds are consistent
 - to ship the docker image, simply use this same yml config to initialise the image on the target machine, configuring environment variables using the exact same files easily
 
 This same process can be adapted easily to many other ways of deploying docker, but in particular kubernetes is the best candidate for an almost "lift-and-shift" migration.