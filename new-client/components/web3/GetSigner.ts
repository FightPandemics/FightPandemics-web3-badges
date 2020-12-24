import GetProvider from "./GetProvider"

export default async function GetSigner(): Promise<any> {
  const provider = await GetProvider()
  const signer = provider.getSigner()
  return signer
}
