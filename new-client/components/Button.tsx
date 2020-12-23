// import { ethers } from "ethers"
import React, { MouseEvent } from "react"
import GetProvider from "./web3/GetProvider"
import { ethers } from "ethers"

export default function Button(): any {
  async function handleClick(e: MouseEvent) {
    // console.log("hi")
    const provider: any = await GetProvider()
    console.log("Provider: ", provider)

    const accounts: Array<String> = await provider.listAccounts()
    console.log("Accounts: ", accounts)
  }
  return (
    <button onClick={handleClick}>Get Provider</button>
  )
}
