import { Stack } from 'expo-router';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


const client = new ApolloClient({
  uri: 'uri',
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      'api',
  },
});

export default function RootLayout() {
  return (
    <ApolloProvider client ={client}>
      <Stack />
    </ApolloProvider>
  )
}
