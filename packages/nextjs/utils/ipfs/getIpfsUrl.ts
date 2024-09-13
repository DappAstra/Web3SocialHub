export // Function to convert IPFS link to HTTP gateway link
const getIpfsUrl = (ipfsUrl: string) => {
  if (ipfsUrl.startsWith("ipfs://")) {
    return ipfsUrl.replace("ipfs://", "https://ipfs.io/ipfs/");
  }
  return ipfsUrl; // In case it's already a valid URL
};
