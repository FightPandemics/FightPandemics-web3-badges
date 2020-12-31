import React from "react"
import GetProviderMetamask from "../web3/GetProviderMetamask"
import GetContractReadWrite from "../web3/GetContractReadWrite"
import Badges from "../contracts/Badges.json"
import { ethers } from "ethers"

export default function Mint() {
  async function handleClick() {
    const provider = await GetProviderMetamask()
    console.log("Provider: ", provider)

    const accounts = await provider.listAccounts()
    console.log("Accounts: ", accounts)

    const contractInstance = await GetContractReadWrite()
    console.log("Contract Instance: ", contractInstance)

    // mint
    const priceFinney = 2
    const tokenURI = "http://sticlalux.ro/bedge.json"
    await contractInstance.mint(accounts[0], priceFinney, tokenURI)

    const badgeId = (await contractInstance.getLatestId()).toNumber()

    const badge = await contractInstance.getBadgesById(badgeId)

    if (badge !== null) {
      alert("Badge Minted!")
    }

  }
  return (
    <button onClick={handleClick}>Mint Badge</button>
  )
}
