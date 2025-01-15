# this is base image
FROM node:latest   


WORKDIR /home/app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json


RUN npm install


COPY ./src ./src
COPY ./tsconfig.json ./tsconfig.json


RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]
