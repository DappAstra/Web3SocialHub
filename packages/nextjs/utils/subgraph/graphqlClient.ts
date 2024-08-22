import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.studio.thegraph.com/query/81936/w3sh_lens/version/latest",
  cache: new InMemoryCache(),
});

export const fetchProfileCreated = async (id: string) => {
  const { data } = await client.query({
    query: gql`
      query ProfileCreated($id: String!) {
        profileCreated(id: $id) {
          id
          profileId
          creator
          to
          timestamp
          blockNumber
          blockTimestamp
          transactionHash
        }
      }
    `,
    variables: { id },
  });
  return data;
};

export const fetchPostsCreated = async (first: number) => {
  const { data } = await client.query({
    query: gql`
      query PostCreateds($first: Int!) {
        postCreateds(first: $first) {
          postParams_contentURI
        }
      }
    `,
    variables: { first },
  });
  console.log(data, "@@@@data");
  return data;
};

export const fetchProfileMetadataSets = async (profileId: number) => {
  const { data } = await client.query({
    query: gql`
      query ProfileMetadataSets($profileId: Int!) {
        profileMetadataSets(where: { profileId: $profileId }, orderBy: blockNumber, orderDirection: desc) {
          metadata
          profileId
          blockNumber
        }
      }
    `,
    variables: { profileId },
  });

  return data;
};

export const fetchPostsCreateds = async (profileId: number) => {
  const { data } = await client.query({
    query: gql`
      query PostsCreateds($profileId: Int!) {
        postCreateds(where: { postParams_profileId: $profileId }, orderBy: blockNumber, orderDirection: desc) {
          postParams_contentURI
        }
      }
    `,
    variables: { profileId },
  });

  return data;
};

export const fetchFollowers = async (profileId: number) => {
  const { data } = await client.query({
    query: gql`
      query Followeds($profileId: Int!) {
        followeds(where: { idOfProfileFollowed: $profileId }, orderBy: blockNumber, orderDirection: desc) {
          followerProfileId
        }
      }
    `,
    variables: { profileId },
  });

  return data;
};
