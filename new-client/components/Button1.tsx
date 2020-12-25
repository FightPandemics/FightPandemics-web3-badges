import React, { MouseEvent } from "react"
import { ethers } from "ethers"
import GetContract from "../components/web3/GetContractRead"

export default function Button(): any {
  async function handleClick(e: MouseEvent) {
    // console.log("hi")
    const contract: any = await GetContract()
    console.log("Contract: ", contract)

    // const accounts: Array<String> = await provider.listAccounts()
    // console.log("Accounts: ", accounts)
  }
  return (
    <button onClick={handleClick}>Get Contract</button>
  )
}
