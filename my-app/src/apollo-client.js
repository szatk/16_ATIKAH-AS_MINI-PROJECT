//// import tinggal copy dari web apollo
import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";


// apolo ini di dapat karna copy di web apolo graph ql
const client = new ApolloClient({
    uri: 'https://atikahchan.hasura.app/v1/graphql',   ///// ini bisa di copy dari hasura yg kita buat 
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret' : 
        'il1Mgp4iAumou0493XcOcx64Ksf46CncBWQ2akaxhlG2UZkek5a2herJvtUOOOr4',
        // kenapa kita buat header? karna kita harus punya output, so header itu alat bantu/ pw buat ngeluarin output
    },
  });
  

  export default client;
// import { ApolloClient, InMemoryCache } from '@apollo/client';

// import { WebSocketLink } from '@apollo/client/link/ws';


// import { split, HttpLink } from '@apollo/client';
// import { getMainDefinition } from '@apollo/client/utilities';


// const httpLink = new HttpLink({
//   uri: 'https://mini-project-frontend.hasura.app/v1/graphql',
//   headers: {
//     'x-hasura-admin-secret':
//       'hrootZmwsOl7H0wJ7HD2Yf5nxa0BYBiYCndozJSyG4HC93pIcW6Wg7LL80texy4h',
//   },
// });

// const wsLink = new WebSocketLink({
//   uri: 'wss://mini-project-frontend.hasura.app/v1/graphql',
//   options: {
//     reconnect: true,
//     connectionParams: {
//       headers: {
//         'x-hasura-admin-secret':
//           'hrootZmwsOl7H0wJ7HD2Yf5nxa0BYBiYCndozJSyG4HC93pIcW6Wg7LL80texy4h',
//       },
//     }
//   }
// });

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   httpLink,
// );


// const client = new ApolloClient({
//   link: splitLink,
//   cache: new InMemoryCache(),
// });

// export default client;