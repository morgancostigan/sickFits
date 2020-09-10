import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import SickButton from './styles/SickButton';
import CartStyles from './styles/CartStyles';
import CloseButton from './styles/CloseButton';
import Supreme from './styles/Supreme';

const LOCAL_STATE_QUERY = gql `
    query {
        # @client tells apollo this is local and not from db
        cartOpen @client
    }
`;//end LOCAL_STATE_QUERY

const Cart = () => {
    return <CartStyles >
        <header>
            <CloseButton title="close">&times;</CloseButton>
            <Supreme>Your Cart</Supreme>
            <p>There are ___ items in your cart.</p>
        </header>

        <footer>
            <p>$12.00</p>
            <SickButton>Check Out</SickButton>
        </footer>
    </CartStyles>
}//end 

export default Cart;

