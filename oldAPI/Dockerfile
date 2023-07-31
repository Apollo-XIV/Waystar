FROM node:19-alpine
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm i
COPY . /usr/src/app/
CMD ["npm", "run", "dev"]