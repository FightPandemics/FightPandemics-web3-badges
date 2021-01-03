import React from "react";
import GetProviderMetamask from "../web3/GetProviderMetamask";
import GetContractRead from "../web3/GetContractRead";

export default function ViewBadge() {
  async function handleClick() {
    const provider = await GetProviderMetamask();
    console.log("Provider: ", provider);

    const accounts = await provider.listAccounts();
    console.log("Accounts: ", accounts);

    const contractInstance = await GetContractRead();
    console.log("Contract Instance: ", contractInstance);

    const badgeId = (await contractInstance.getLatestId()).toNumber();

    const tokenURI = await contractInstance.tokenURI(badgeId);
    console.log("TokenURI: ", tokenURI);

    // axios.get(tokenURI, {
    //   headers: {
    //     "Access-Control-Allow-Origin": true
    //   }
    // })
    // .then(function (res) {
    //   console.log("TokenURI Response: ", res)
    // })
  }
  return (
    <button onClick={handleClick}>View Badge</button>
  );
}
