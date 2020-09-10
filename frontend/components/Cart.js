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

const TOGGLE_CART_MUTATION = gql `
    mutation {
        toggleCart @client
    }
`;//end TOGGLE_CART_MUTATION

const Cart = () => ( 
    <Mutation mutation={TOGGLE_CART_MUTATION}>
    {(toggleCart) => (
        <Query query={LOCAL_STATE_QUERY}>
        {({data}) => (
            <CartStyles open={data.cartOpen}>
                <header>
                    <CloseButton onClick={toggleCart} title="close">
                        &times;
                    </CloseButton>
                    <Supreme>Your Cart</Supreme>
                    <p>There are ___ items in your cart.</p>
                </header>

                <footer>
                    <p>$12.00</p>
                    <SickButton>Check Out</SickButton>
                </footer>
            </CartStyles>
        )}</Query>
    )}</Mutation>
);//end 

export default Cart;

