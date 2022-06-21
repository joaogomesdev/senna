import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl4o962i31dxh01z2a3rhha3h/master",
  cache: new InMemoryCache(),
});
