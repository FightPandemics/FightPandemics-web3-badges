# FightPandemics-Web3

Fight Pandemics Token Badges for volunteers.

`develop` branch is the default branch

Folder structure:
- `base`: contains contracts
- `client`: frontend UI, contains React components to interact with contracts
- `api`: backend API with PostGres database

# Prerequisites
- Solidity compiler (solc) 0.7.3 (soon to be upgraded to 0.8.0)
- Yarn latest version
- NVM (Node Version Manager) - run `nvm install` to install node version locally from `.nvmrc` file within each folder
- Install PostGres for your platform and create database named `badges_dev` based on the database URL string below.
- In `/api` created a `.env` file with the following
```
NODE_ENV=development
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/badges_dev
```
## For Pinata Access
- In `/client` create a `.env` file with the following
```
REACT_APP_PINATA_API_KEY=
REACT_APP_PINATA_SECRET_API_KEY=
```
- *contact @jontkoh for the Pinata keys*

# General Steps
1. Run `yarn setup` in project root directory to install dependencies for all folders.
2. Then run `cd api && yarn migrate` to migrate database.
3. Start local blockchain node with `cd base && yarn start`
4. While inside `/base`, run `yarn deploy` to deploy contracts to local node.
5. Back in root directory, run `yarn dev` to run client and api in one terminal OR run `yarn api:dev` and `yarn client:dev` in separate terminals.
