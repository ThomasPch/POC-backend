## Description

POC Backend SCDI 

## Installation

```bash
$ npm install
```

## Running the app
```bash
# Start the containers
$ docker-compose up

# development
$ npm run start

# watch mode (hot refresh)
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov

# Run hot refresh
$ npm run start:dev
```

## Compodoc

```bash
# Generate documentation
$ npx @compodoc/compodoc -p tsconfig.json -s
```