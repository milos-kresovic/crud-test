## Installation

```bash
$ yarn install
```

## Running the app
- before running the app locally, make sure to have postgresql db ready with environment variables all set in the coresponding `.env` files

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Running the app and DB with Docker

```bash
# dev
$ export NODE_ENV=dev
$ docker-compose --env-file \.env.dev up --build 

# prod
$ export NODE_ENV=dev
$ docker-compose --env-file \.env.dev up --build 
```
