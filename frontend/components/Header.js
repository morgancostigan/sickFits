import Nav from './Nav';
import Link from 'next/link'; 
import styled from 'styled-components';

const Logo = styled.h1`
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    transform: skew(-7deg);
    a {
        padding: .5rem 1rem;
        background: ${props => props.theme.red};
        color: white;
        text-transform: uppercase;
        text-decoration: none;
    }
`;//end Logo

const Header = () => (
    <div>
        <div className="bar">
            <Logo>
                <Link href="/">
                    <a>SF</a>
                </Link>
            </Logo> 
            <Nav />
        </div>
        <div className="sub-bar">
            <p>Search</p>
        </div>
        <div>Cart </div>
    </div>
)//end const Header

export default Header; 