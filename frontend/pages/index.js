//  import React from 'react'; //not needed with next.js
import Link from 'next/link';

 const Home = props => (
     <div>
         <p>Kia Ora!</p>
         <Link href="/sell">
         <a>Hokona! </a>
         </Link>
     </div>
 )

 export default Home;