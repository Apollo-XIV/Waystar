@ -1,12 +0,0 @@
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