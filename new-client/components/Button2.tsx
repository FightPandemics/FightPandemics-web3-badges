// import { ethers } from "ethers"
import React, { MouseEvent } from "react"
import GetSigner from "../components/web3/GetSigner"

export default function Button(): any {
  async function handleClick(e: MouseEvent) {
    const signer: any = await GetSigner()
    console.log("Contract: ", signer)
  }
  return (
    <button onClick={handleClick}>Get Signer</button>
  )
}
