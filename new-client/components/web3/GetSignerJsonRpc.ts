import GetProviderJsonRpc from "./GetProviderJsonRpc"

export default async function GetSigner(): Promise<any> {
  const provider = await GetProviderJsonRpc()
  const signer = provider.getSigner()
  return signer
}
