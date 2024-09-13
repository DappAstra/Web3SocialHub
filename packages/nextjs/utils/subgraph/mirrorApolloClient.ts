import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.studio.thegraph.com/query/81936/w3sh_mirror_optimism/version/latest",
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
    console.log(error, "@@@@error");
    throw new Error("Failed to fetch writing edition purchased");
  }
};
