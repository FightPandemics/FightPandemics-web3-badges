import { ethers } from "ethers"

export default async function GetProvider(): Promise<any> {
  const provider: any = new ethers.providers.JsonRpcProvider()
  return provider
}
