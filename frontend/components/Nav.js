import Link from 'next/link'; 

const Nav = () => (
    <div>
        <Link href="/sell">
            <a>Hokona!</a>
        </Link>
        <Link href="/">
            <a>Kaainga</a>
        </Link>
    </div>
)//end const Nav

export default Nav;