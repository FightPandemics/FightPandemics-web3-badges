import { ethers } from "ethers";

export default async function GetProviderMetamask() {
  if (typeof window !== "undefined") {
    await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    return provider;
  }
}
