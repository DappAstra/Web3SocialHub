import { useEffect, useState } from "react";
import Arweave from "arweave";
import { Post } from "~~/types/utils";
import { fetchPostsCreateds } from "~~/utils/subgraph/graphqlClient";

export const useUserPosts = () => {
  const [userPosts, setUserPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { postCreateds } = await fetchPostsCreateds(1);

        if (postCreateds[0].postParams_contentURI?.startsWith("ar://")) {
          const arweave = Arweave.init({
            host: "arweave.net",
            port: 443,
            protocol: "https",
          });

          // Use a for loop instead of reduce to handle asynchronous code
          const postsData: Post[] = [];

          for (const post of postCreateds) {
            const transactionId = post?.postParams_contentURI.replace("ar://", "");
            const data = await arweave.transactions.getData(transactionId, { decode: true, string: true });

            if (typeof data === "string") {
              postsData.push(JSON.parse(data));
            } else {
              console.error("Received data is not a string, cannot parse JSON");
            }
          }

          if (postsData.length) setUserPosts(postsData);
        }
      } catch (err: any) {
        setError("Error fetching data: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { userPosts, loading, error };
};
