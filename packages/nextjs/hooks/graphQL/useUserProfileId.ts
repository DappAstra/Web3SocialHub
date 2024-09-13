import { useEffect, useState } from "react";
import { fetchTransfersFrom } from "~~/utils/subgraph/lensApolloClient";

export const useUserProfileId = (address: string | undefined) => {
  const [userProfileId, setUserProfileId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Only fetch data if the address is defined
    if (!address) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const { transfers } = await fetchTransfersFrom(address);

        if (transfers.length > 0) {
          setUserProfileId(parseInt(transfers[0]?.profileId));
        }
      } catch (err: any) {
        setError("Error fetching data: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [address]);

  return { userProfileId, loading, error };
};
