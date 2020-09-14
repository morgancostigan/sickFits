import React, { Component } from 'react';
import formatMoney from '../lib/formatMoney';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CartItemStyles = styled.li `

`;//end CartItemStyles

const CartItem = props => 
    <CartItemStyles>
        <img width='100' src={props.cartItem.item.image} alt="Image not found"></img>
    {props.cartItem.item.description}    
    
    </CartItemStyles>
;// end CartItem 

CartItem.propTypes = {
    cartItem: PropTypes.object.isRequired,
}

export default CartItem;