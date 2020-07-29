//  import React from 'react'; //not needed with next.js

import Items from '../components/Items';
import Link from 'next/link';

 const Home = props => (
     <div>
         <Items page={parseFloat(props.query.page) || 1}/> 
     </div>
 )

 export default Home;