import Link from 'next/link'; 
import NavStyles from './styles/NavStyles'; 

const Nav = () => (
    <NavStyles>
        <Link href="/sell">
            <a>Sell</a>
        </Link>
        <Link href="/">
            <a>Home</a>
        </Link>
    </NavStyles>
)//end const Nav

export default Nav;   