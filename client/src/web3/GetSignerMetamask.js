import GetProviderMetamask from "./GetProviderMetamask";
import GetContractReadWrite from "";

export default async function GetSignerMetamask() {
  const provider = await GetProviderMetamask();
  const signer = provider.getSigner();
  return signer;
}
