import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://YOUR_END_POINT/graphql",
  cache: new InMemoryCache(),
});
