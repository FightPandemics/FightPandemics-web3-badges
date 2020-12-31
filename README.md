# FightPandemics-Web3

Fight Pandemics Token Badges for volunteers.

`develop` branch is the default branch

Folder structure:
- `base`: contains contracts
- `client`: Application interface, contains React components to interact with contracts

# Prerequisites
- Solidity compiler (solc) 0.7.3 (soon to be upgraded to 0.8.0)
- Yarn
- NVM (Node Version Manager) - run `nvm install` to install node version locally from `.nvmrc` file in `/base` folder

# General Steps
1. Run `yarn install` inside each folder to install dependencies
2. Start local blockchain node with
```bash
$ cd base
$ yarn start
```
3. While inside `/base`, run `yarn deploy` to deploy contracts to local node.
4. Start client with
```bash
$ cd client
$ yarn start
```
