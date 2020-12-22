
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat"); // unused atm. usage e.g: const Greeter = await hre.ethers.getContractFactory("Greeter");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Box = await ethers.getContractFactory("Badges");
  console.log("Deploying Badges...");
  const badge = await Box.deploy();
  await badge.deployed();
  console.log("Badges deployed to:", badge.address);


  const accounts = await ethers.provider.listAccounts();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
