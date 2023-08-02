import { ApolloLink, HttpLink } from '@apollo/client';

export const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQLAPI_URL });

export const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token');

  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  });

  return forward(operation);
});
