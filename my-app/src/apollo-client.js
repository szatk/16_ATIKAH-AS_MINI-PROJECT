import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';


const httpLink = new HttpLink({
  uri: 'https://atikahchan.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret':
      'il1Mgp4iAumou0493XcOcx64Ksf46CncBWQ2akaxhlG2UZkek5a2herJvtUOOOr4',
  },
});

const wsLink = new WebSocketLink({
  uri: 'wss://atikahchan.hasura.app/v1/graphql',
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        'x-hasura-admin-secret':
          'il1Mgp4iAumou0493XcOcx64Ksf46CncBWQ2akaxhlG2UZkek5a2herJvtUOOOr4',
      },
    }
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);


const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;