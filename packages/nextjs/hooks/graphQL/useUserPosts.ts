import { useEffect, useState } from "react";
import Arweave from "arweave";
import { ILensPost } from "~~/types/utils";
import { fetchPostsCreateds } from "~~/utils/subgraph/lensApolloClient";

export const useUserPosts = (userProfileId: number | null) => {
  const [userPosts, setUserPosts] = useState<ILensPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (userProfileId === null) return; // If no userProfileId is provided, don't make the API call

      try {
        setLoading(true); // Set loading state before fetching
        const { postCreateds } = await fetchPostsCreateds(userProfileId);

        if (postCreateds.length > 0 && postCreateds[0].postParams_contentURI?.startsWith("ar://")) {
          const arweave = Arweave.init({
            host: "arweave.net",
            port: 443,
            protocol: "https",
          });

          const postsData: ILensPost[] = [];

          for (const post of postCreateds) {
            const transactionId = post?.postParams_contentURI.replace("ar://", "");
            const data = await arweave.transactions.getData(transactionId, { decode: true, string: true });

            if (typeof data === "string") {
              postsData.push(JSON.parse(data));
            } else {
              console.error("Received data is not a string, cannot parse JSON");
            }
          }

          setUserPosts(postsData);
        } else {
          setError("No valid posts found for this user.");
        }
      } catch (err: any) {
        setError("Error fetching data: " + err.message);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, [userProfileId]); // Re-run effect if userProfileId changes

  return { userPosts, loading, error };
};
