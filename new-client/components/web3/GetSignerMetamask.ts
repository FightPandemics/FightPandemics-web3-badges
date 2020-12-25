import GetProviderMetamask from "./GetProviderMetamask"

export default async function GetSigner(): Promise<any> {
  const provider = await GetProviderMetamask()
  const signer = provider.getSigner()
  return signer
}
