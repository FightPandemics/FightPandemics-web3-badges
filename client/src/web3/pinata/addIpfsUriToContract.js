/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import getContract from "../GetContractReadWrite";

// TODO: set the ipfs URI to the contract
export default async function addIpfsUriToContract(ipfsHash) {
  const ipfsUri = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
  const contract = await getContract();
  await console.log(contract);
  try {
    const tokenId = await contract.getLatestBadgeId();
    await contract.setTokenURI(tokenId, ipfsUri);
  } catch (error) {
    console.error(error);
  }
}
