import Link from 'next/link'; 
import NavStyles from './styles/NavStyles'; 
import User from './User';
import Signout from './Signout';
import CartCount from './CartCount';
import { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION } from './Cart';
import { Mutation } from 'react-apollo';

const Nav = () => (

        <User>
            {({data: {me}}) => (
            <NavStyles>
                <Link href="/items">
                    <a>Shop</a>
                </Link>

                {me && (
                    <>
                        <Link href="/sell">
                            <a>Sell</a>
                        </Link>
                        <Link href="/orders">
                            <a>Orders</a>
                        </Link>
                        <Link href="/me">
                            <a>Account</a>
                        </Link>
                        <Signout />
                        <Mutation mutation={TOGGLE_CART_MUTATION}>
                            {(toggleCart) => (
                                <button onClick={toggleCart}>
                                    Cart
                                    <CartCount count={33}/>

                                </button>
                            )}
                        </Mutation>

                    </>
                )}

                {!me && (
                    <Link href="/signup">
                        <a>Sign In</a>
                    </Link>
                )}

            </NavStyles>
            )}
        </User>

)//end const Nav

export default Nav;   