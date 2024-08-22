import { useEffect, useState } from "react";
import Arweave from "arweave";
import { LensProfile } from "~~/types/utils";
import { fetchProfileMetadataSets } from "~~/utils/subgraph/graphqlClient";

export const useUserMetadata = (userProfileId: number) => {
  const [userMetadata, setUserMetadata] = useState<LensProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { profileMetadataSets } = await fetchProfileMetadataSets(userProfileId);
        const metadata = profileMetadataSets[0]?.metadata;

        if (metadata?.startsWith("ar://")) {
          const arweave = Arweave.init({
            host: "arweave.net",
            port: 443,
            protocol: "https",
          });

          const transactionId = metadata.replace("ar://", "");
          const data = await arweave.transactions.getData(transactionId, { decode: true, string: true });

          if (typeof data === "string") {
            setUserMetadata(JSON.parse(data).lens as LensProfile);
          } else {
            console.error("Received data is not a string, cannot parse JSON");
          }
        }
      } catch (err: any) {
        setError("Error fetching data: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userProfileId]);

  return { userMetadata, loading, error };
};
