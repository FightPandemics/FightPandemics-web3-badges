import { ethers, Contract, ContractInterface } from "ethers"
import Badges from "../../contracts/Badges.json"
import GetSigner from "./GetSignerJsonRpc"

export default async function GetContract(): Promise<any> {
  const signer = await GetSigner()

  const abi: any = Badges.abi
  const contractInterface: ContractInterface = new ethers.utils.Interface(abi)
  const contractAddress: string = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  const contractInstance: Contract = new ethers.Contract(contractAddress, contractInterface, signer)

  return contractInstance
}
