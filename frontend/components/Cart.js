import React from 'react';
import SickButton from './styles/SickButton';
import CartStyles from './styles/CartStyles';
import CloseButton from './styles/CloseButton';
import Supreme from './styles/Supreme';

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

