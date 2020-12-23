import { ethers, ContractInterface } from "ethers"
import React, { MouseEvent } from "react"
import Badges from "../contracts/Badges.json"

export default function GetWeb3(): any {
  async function handleClick(e: MouseEvent) {
    if(typeof window !== "undefined") {
      await (window as any).ethereum.enable()
      const provider: any = new ethers.providers.Web3Provider((window as any).ethereum)
      let abi = Badges.abi
      const contractABI: ContractInterface = new ethers.utils.Interface(abi)
      const contractAddress: string = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

      const contractInstance = new ethers.Contract(contractAddress, contractABI, provider)
      console.log("Contract Instance: ", contractInstance)

      console.log("Block number: ", await provider.getBlockNumber())
      e.preventDefault();

      let accounts: Array<String> = await provider.listAccounts()
      console.log("Accounts: ", accounts)

      let balance: BigInteger = await provider.getBalance(accounts[0])
      console.log("Ether balance: ", ethers.utils.formatEther(balance))



    }
  }

  return (
    <button onClick={handleClick}>Get Web3</button>
  )
}
