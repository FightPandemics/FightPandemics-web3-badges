import { ethers } from "ethers";
import Badges from "../contracts/Badges.json";
import GetSignerJsonRpc from "./GetSignerJsonRpc";

export default async function GetContractReadWrite() {
  const signer = await GetSignerJsonRpc();
  const abi = Badges.abi;
  const contractInterface = new ethers.utils.Interface(abi);
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const contractInstance = new ethers.Contract(contractAddress, contractInterface, signer);

  return contractInstance;
}
