import { ethers } from "ethers"

export default async function GetProvider(): Promise<any> {
  if (typeof window !== "undefined") {
    await (window as any).ethereum.enable()
    const provider: any = new ethers.providers.Web3Provider((window as any).ethereum)
    return provider
  }
}
