import { useEffect, useState } from "react";
import MirrorABI from "../../../../abis/MirrorPosts.json";
import Arweave from "arweave";
import { useReadContracts } from "wagmi";
import { fetchWritingEditionPurchaseds } from "~~/utils/subgraph/mirrorApolloClient";

// Your ABI

export const useWritingEditionPurchased = () => {
  const [writingEditionPurchased, setWritingEditionPurchased] = useState<string[]>([]);
  const [contractURIs, setContractURIs] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [posts, setPosts] = useState<any[]>([]); // Store the decoded posts

  // Initialize Arweave
  const arweave = Arweave.init({
    host: "arweave.net", // Arweave Gateway
    port: 443,
    protocol: "https",
  });

  // Fetch the list of purchased editions (contract addresses)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { writingEditionPurchaseds } = await fetchWritingEditionPurchaseds(10);
        if (writingEditionPurchaseds && writingEditionPurchaseds.length > 0) {
          const newEditions = writingEditionPurchaseds.map((edition: any) => edition.clone);
          setWritingEditionPurchased(newEditions);
        }
      } catch (err: any) {
        setError("Error fetching data: " + err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Build the contracts array for useReadContracts
  const contracts = writingEditionPurchased.map(address => ({
    address, // Contract address
    abi: MirrorABI as any, // TypeScript expects an array of ABI elements
    functionName: "contentURI", // Function we want to call
  }));

  // Call useReadContracts to fetch contentURI for each contract
  const {
    data,
    isError,
    error: wagmiError,
  } = useReadContracts({
    contracts,
  });

  // Fetch Arweave content for each contract URI
  useEffect(() => {
    const fetchPostsFromArweave = async (hashes: string[]) => {
      const fetchedPosts = await Promise.all(
        hashes.map(async hash => {
          try {
            const data = (await arweave.transactions.getData(hash, { decode: true, string: true })) as string;
            return JSON.parse(data); // Assuming the Arweave data is in JSON format
          } catch (error) {
            console.error(`Error fetching Arweave data for hash: ${hash}`, error);
            return null;
          }
        }),
      );

      // Filter out any null results
      setPosts(fetchedPosts.filter(post => post !== null));
    };

    if (data) {
      const uris = data
        .map((uri: any) => (uri?.result ? uri.result.toString() : null))
        .filter((uri: string | null): uri is string => !!uri);

      setContractURIs(uris);
      fetchPostsFromArweave(uris); // Fetch the posts from Arweave using the URIs
      setLoading(false);
    }

    if (isError) {
      setError(wagmiError?.message || "Error fetching contract URIs");
      setLoading(false);
    }
  }, [data, isError, wagmiError]);

  return { writingEditionPurchased, contractURIs, posts, loading, error };
};
