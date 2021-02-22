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

# General Steps
1. Run `yarn setup` in project root directory to install dependencies for all folders.
2. Then run `cd api && yarn migrate` to migrate database.
3. Start local blockchain node with
```bash
$ cd base
$ yarn start
```
4. While inside `/base`, run `yarn deploy` to deploy contracts to local node.
5. Back in root directory, run `yarn dev` to run client and api in one terminal OR run `yarn api:dev` and `yarn api:client` in separate terminals.
