import withApollo from 'next-with-apollo'; //works with next.js and apollo
import ApolloClient from 'apollo-boost'; //includes all of the apollo Links
import { endpoint } from '../config'; 
import { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION } from '../components/Cart';

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
      resolvers: {
        Mutation: {
          toggleCart(_, variables, {cache}) {
            //read cartOpen value in cache
            const {cartOpen} = cache.readQuery({
              query: LOCAL_STATE_QUERY,
            });
            //write cart state to the opposite
            const data = {
              data: {
                cartOpen: !cartOpen
              },
            };
            cache.writeData(data);
            return data;
          },
        },
      },
      defaults: {
        cartOpen: true,
      }
    }//end clientState
  });
}

export default withApollo(createClient);
