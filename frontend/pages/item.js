//  import React from 'react'; //not needed with next.js
import SingleItem from '../components/SingleItem';

const Item = props => (
    <div>
        {/* <p>Just this one thing!</p> */}
        <SingleItem id={props.query.id} />
    </div>
);

export default Item;