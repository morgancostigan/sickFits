import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import User from './User';
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
    <User>{( {data: { me }}) => { 
        if(!me) return null;        
        return (
            <Mutation mutation={TOGGLE_CART_MUTATION}>
            {(toggleCart) => (
                <Query query={LOCAL_STATE_QUERY}>
                {({data}) => (
                    <CartStyles open={data.cartOpen}>
                        <header>
                            <CloseButton onClick={toggleCart} title="close">
                                &times;
                            </CloseButton>
                            <Supreme>{me.name}'s Cart</Supreme>
                                    <p>There {me.cart.length === 1 ? 'is' : 'are'} {me.cart.length} item{me.cart.length === 1 ? '' : 's'} in your cart.</p>
                        </header>

                        <footer>
                            <p>$12.00</p>
                            <SickButton>Check Out</SickButton>
                        </footer>
                    </CartStyles>
                )}</Query>
            )}</Mutation>
        );
    }}</User>
);//end 

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };

