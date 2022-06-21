import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nkkcqx04su01xp3twz9ejf/master',
  cache: new InMemoryCache(),
});
