# How to use

## Installation

```bash
yarn install
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

## Before re-running the app
```bash
$ yarn remove-local
$ docker-compose down
```
### and then run

```bash
$ rm -rf build & rm -rf data
$ docker-compose down
```

## Important

### Make sure

1. You have docker installed
2. You have node installed
3. You have provided the correct RPC
4. You have `graph-cli` installed

## Networks and start block
In `subgraph.yaml` you can find the networks you want to listen to. You need to provide the start block for the network you want to listen to. Also, you can provide the subgraph name and the contract address. Final step is change `networks.json` to the network you want to listen to.



## Handlers
In `src/mapping.ts` you can find the handlers for the events. You can add more handlers for the events you want to listen to.

## Installing graph-cli

```bash
$ npm install -g @graphprotocol/graph-cli
```

### for the scratch setup
```bash
$ graph init
```