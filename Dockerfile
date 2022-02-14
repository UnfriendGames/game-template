FROM node:16-alpine

# create destination directory
RUN mkdir -p /app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app
COPY . /app
RUN chmod +x /app/start.sh

WORKDIR /app/game-core
RUN npm install
RUN npm run build

WORKDIR /app/back
RUN npm install
RUN npm run build

WORKDIR /app/front
RUN npm install
RUN npm run build

WORKDIR /app
# startup command
CMD [ "sh", "./start.sh"]