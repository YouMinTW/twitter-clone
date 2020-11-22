import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
const httpLink = createHttpLink({
  uri: `https://${process.env.REACT_APP_GRAPHQL_HOST}/v1/graphql`,
});

export const createApolloClient = () => {
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
  return apolloClient;
};
