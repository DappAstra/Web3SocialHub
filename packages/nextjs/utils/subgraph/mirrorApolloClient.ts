import { MIRROR_SUBGRAPH_URI } from "./constants";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: MIRROR_SUBGRAPH_URI,
  cache: new InMemoryCache(),
});

export const fetchWritingEditionPurchaseds = async (first: number | undefined) => {
  try {
    const { data } = await client.query({
      query: gql`
        query WritingEditionPurchaseds($first: Int) {
          writingEditionPurchaseds(first: 10, orderBy: blockNumber, orderDirection: desc) {
            clone
          }
        }
      `,
      variables: { first },
    });
    return data;
  } catch (error) {
    throw new Error("Failed to fetch writing edition purchased");
  }
};
