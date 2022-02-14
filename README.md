# How to dev a game

## One command setup: (install dependencies & copy files)
``` cd front; cp .env.example .env; npm i; cd ../game-core; npm i; cd ../back; cp .env.example .env; npm i; npm install -g ts-node  ```

## Start projects
Both projects has to be started to dev

### Start front
```cd front; npm run dev```

### Start back
```cd back; npm run dev```

## Populate .npmrc file

- You will need a token, you can generate one [this page](https://github.com/settings/tokens/new) with read:packages
- Replace "TOKEN" with your generated token

## Populate .env

- To just dev a game, default options should be enough

⚠️ If Unfriend API is down, you'll not be able to dev correctly. But it shouldn't happend

