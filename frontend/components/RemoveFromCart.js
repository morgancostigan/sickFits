import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components'; 
import PropTypes from 'prop-types';
import { CURRENT_USER_QUERY } from './User';

const REMOVE_FROM_CART_MUTATION = gql `
    mutation removeFromCart($id: ID!) {
        removeFromCart(id: $id) {
            # to remove from cache
            id
        }
    }
`;//end REMOVE_FROM_CART_MUTATION

const BigButton = styled.button`
    font-size: 3rem;
    background: none;
    border: 0;
    &:hover{
        color: ${props => props.theme.red};
        cursor: pointer;
    }
`;//end BigButton

class RemoveFromCart extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
    };
    //this update function gets called as soon as we get a response from the server that the mutation has been performed
    //cache is the apollo cache
    //payload is the return from the server after the gql mutation
    update = (cache, payload) => {
        console.log('running remove from cart update function');
        //1 read the cache
        const data = cache.readQuery({ query: CURRENT_USER_QUERY});
        console.log(data);
        //2 remove item from the cart
        const cartItemId = payload.data.removeFromCart.id;
        data.me.cart = data.me.cart.filter(cartItem => cartItem.id !== cartItemId)
        //3 write it back to the cache
        cache.writeQuery({ query: CURRENT_USER_QUERY, data});
    }
    render() {
        return (
            <Mutation 
            mutation={REMOVE_FROM_CART_MUTATION} 
            variables={{id: this.props.id}}
            update={this.update}
            //optimisticResponse runs on what you assume the outcome to be
            optimisticResponse={{
                __typename: 'Mutation',
                removeFromCart: {
                    id: this.props.id,
                },
            }}
            >
                {(removeFromCart, {loading, error}) => 
                    <BigButton 
                    onClick={() => {
                        removeFromCart().catch(err => alert(err.message));
                    }}
                    title="Delete Item"
                    disabled={loading}>
                        &times;
                    </BigButton>
                }
            </Mutation> 
        );
    }
};//end RemoveFromCart

export default RemoveFromCart;