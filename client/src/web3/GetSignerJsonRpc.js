import GetProviderJsonRpc from "./GetProviderJsonRpc";

export default async function GetSignerJsonRpc() {
  const provider = await GetProviderJsonRpc();
  const signer = provider.getSigner();
  return signer;
}
