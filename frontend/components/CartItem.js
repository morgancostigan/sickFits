import React, { Component } from 'react';
import formatMoney from '../lib/formatMoney';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CartItemStyles = styled.li `

`;//end CartItemStyles

const CartItem = props => 
    <CartItemStyles>
    {props.cartItem.item.title}    
    
    </CartItemStyles>
;// end CartItem 

CartItem.propTypes = {
    cartItem: PropTypes.object.isRequired,
}

export default CartItem;