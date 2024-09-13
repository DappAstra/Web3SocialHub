import { useEffect, useState } from "react";
import { Follower } from "~~/types/utils";
import { fetchFollowers } from "~~/utils/subgraph/lensApolloClient";

export const useUserFollowers = (userProfileId: number | null) => {
  const [followers, setFollowers] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { followeds } = await fetchFollowers(userProfileId);
        const data = followeds.reduce((acc: string[], follower: Follower) => {
          if (follower?.followerProfileId) acc.push(follower.followerProfileId);
          return acc;
        }, []);

        if (data.length) setFollowers(data);
      } catch (err: any) {
        setError("Error fetching data: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { followers, loading, error };
};
