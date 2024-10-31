import { LENS_SUBGRAPH_URI } from "./constants";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: LENS_SUBGRAPH_URI,
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

  return data;
};

export const fetchProfileMetadataSets = async (profileId: number | null) => {
  try {
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
  } catch (error) {
    throw new Error("Failed to fetch user profile info.");
  }
};

export const fetchPostsCreateds = async (profileId: number | null, skip = 0, first = 10) => {
  const { data } = await client.query({
    query: gql`
      query PostsCreateds($profileId: Int!, $skip: Int!, $first: Int!) {
        postCreateds(
          where: { postParams_profileId: $profileId }
          orderBy: blockNumber
          orderDirection: desc
          skip: $skip
          first: $first
        ) {
          postParams_contentURI
        }
      }
    `,
    variables: { profileId, skip, first },
  });

  return data;
};

export const fetchFollowers = async (profileId: number | null) => {
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

export const fetchTransfersFrom = async (address: string | undefined) => {
  try {
    const { data } = await client.query({
      query: gql`
        query TransfersFrom($address: String!) {
          transfers(where: { to: $address }, orderDirection: desc, orderBy: blockNumber) {
            tokenId
            profileId
            blockNumber
          }
        }
      `,
      variables: { address },
    });
    return data;
  } catch (error) {
    throw new Error("Failed to fetch transfers");
  }
};
