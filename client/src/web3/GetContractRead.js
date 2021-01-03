import { ethers } from "ethers";
import Badges from "../contracts/Badges.json";
import GetProviderMetamask from "./GetProviderMetamask";

export default async function GetContractRead() {
  const provider = await GetProviderMetamask();
  const abi = Badges.abi;
  const contractInterface = new ethers.utils.Interface(abi);
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const contractInstance = new ethers.Contract(contractAddress, contractInterface, provider);

  return contractInstance;
}
