import withApollo from 'next-with-apollo'; //works with next.js and apollo
import ApolloClient from 'apollo-boost'; //includes all of the apollo Links
import { endpoint } from '../config'; 

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },//end request
    //clientState is your local data
    clientState: {
      resolvers: {  },
      defaults: {
        cartOpen: true,
      }
    }//end clientState
  });
}

export default withApollo(createClient);
