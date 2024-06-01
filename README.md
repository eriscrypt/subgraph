# How to use

## Installation

```bash
yarn install
```

## Before re-running the app

```bash
$ yarn remove-local
$ docker-compose down
```

## Running the app

```bash
# Build
$ yarn build && yarn codegen

# Run docker
$ docker-compose up -d

# Create ipfs and database
$ yarn create-local
$ yarn deploy-local
```

## Important

### Make sure

1. You have docker installed
2. You have node installed
3. You have provided the correct RPC
