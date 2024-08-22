import { useEffect, useState } from "react";
import Arweave from "arweave";
import { Post, PostEncode } from "~~/types/utils";
import { fetchPostsCreateds } from "~~/utils/subgraph/graphqlClient";

export const useFollowersPosts = (followers: string[]) => {
  const [followersPosts, setFollowersPosts] = useState<{ [key: string]: Post[] }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFollowerPosts: any = async (followerId: number) => {
      try {
        const { postCreateds } = await fetchPostsCreateds(followerId);
        const arweave = Arweave.init({
          host: "arweave.net",
          port: 443,
          protocol: "https",
        });

        const postsData = await Promise.all(
          postCreateds.map(async (post: PostEncode) => {
            if (post.postParams_contentURI?.startsWith("ar://")) {
              const transactionId = post.postParams_contentURI.replace("ar://", "");
              const data = await arweave.transactions.getData(transactionId, { decode: true, string: true });

              if (typeof data === "string") {
                return JSON.parse(data) as Post;
              } else {
                console.error("Received data is not a string, cannot parse JSON");
                return null;
              }
            }
            return null;
          }),
        );

        return postsData.filter(post => post !== null); // Filter out null values
      } catch (err: any) {
        setError("Error fetching data: " + err.message);
        return [];
      }
    };

    const fetchData = async () => {
      try {
        const data = await Promise.all(
          followers.map(async followerId => {
            const followerPosts = await fetchFollowerPosts(parseInt(followerId));
            return { [followerId]: followerPosts };
          }),
        );

        const followersPostsData = data.reduce(
          (acc, curr) => {
            const [followerId, posts] = Object.entries(curr)[0];
            if (posts.length > 0) {
              acc[followerId] = posts;
            }
            return acc;
          },
          {} as { [key: string]: Post[] },
        );

        setFollowersPosts(followersPostsData);
      } catch (err: any) {
        setError("Error fetching followers' posts: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    if (followers.length) {
      fetchData();
    }
  }, [followers]);

  return { followersPosts, loading, error };
};
