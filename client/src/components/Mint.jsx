import React from "react";
import GetProviderJsonRpc from "../web3/GetProviderJsonRpc";
import GetContractReadWrite from "../web3/GetContractReadWrite";

export default function Mint() {
  async function handleClick() {
    const provider = await GetProviderJsonRpc();
    console.log("Provider: ", provider);

    const accounts = await provider.listAccounts();
    console.log("Accounts: ", accounts);

    const contractInstance = await GetContractReadWrite();
    console.log("Contract Instance: ", contractInstance);

    // mint
    const priceFinney = 2;
    const tokenURI = "http://sticlalux.ro/bedge.json";
    await contractInstance.mint(accounts[0], priceFinney, tokenURI);

    const badgeId = (await contractInstance.getLatestBadgeId()).toNumber();

    const badge = await contractInstance.getBadgeById(badgeId);

    if (badge !== null) {
      alert("Badge Minted!");
    }
  }
  return (
    <button onClick={handleClick}>Mint Badge</button>
  );
}
