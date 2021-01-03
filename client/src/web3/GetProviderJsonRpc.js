import { ethers } from "ethers";

export default async function GetProviderJsonRpc() {
  const provider = new ethers.providers.JsonRpcProvider();
  return provider;
}
