import React, { Component } from 'react';
import formatMoney from '../lib/formatMoney';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CartItemStyles = styled.li `

`;//end CartItemStyles

const CartItem = ({cartItem}) => 
    <CartItemStyles>
        <img width='100' src={cartItem.item.image} alt={cartItem.item.title} />
        <div claasName="cart-item-details">
            <h3>{cartItem.item.title}</h3>
            <p>
                {formatMoney(cartItem.item.price * cartItem.quantity)}
                {' --- '}
                <em>
                    {cartItem.quantity} &times; {formatMoney(cartItem.item.price)}
                </em>
            </p>
        </div>
    
    </CartItemStyles>
;// end CartItem 

CartItem.propTypes = {
    cartItem: PropTypes.object.isRequired,
}

export default CartItem;