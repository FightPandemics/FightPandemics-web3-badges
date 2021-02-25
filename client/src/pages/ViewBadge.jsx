import React from "react";
// import GetProviderMetamask from "../web3/GetProviderMetamask";
// import GetContractRead from "../web3/GetContractRead";
import GetContractReadWrite from "../web3/GetContractReadWrite";
import axios from "axios";

export default function ViewBadge() {
  async function handleClick() {
    // const provider = await GetProviderMetamask();
    // console.log("Provider: ", provider);

    // const accounts = await provider.listAccounts();
    // console.log("Accounts: ", accounts);

    const contractInstance = await GetContractReadWrite();
    console.log("Contract Instance: ", contractInstance);

    const badgeId = (await contractInstance.getLatestBadgeId()).toNumber();
    console.log("Latest Badge ID: ", badgeId);

    const tokenURI = await contractInstance.tokenURI(badgeId);
    console.log("TokenURI: ", tokenURI);

    // enter this URL in your browser to get temporary access
    const proxyURL = "https://cors-anywhere.herokuapp.com/";

    axios.get(proxyURL + tokenURI, {
      headers: {
        "Access-Control-Allow-Origin": true,
      },
    })
      .then(function(res) {
        console.log("TokenURI Response: ", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <button onClick={handleClick}>View Badge</button>
  );
}
