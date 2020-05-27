import Link from 'next/link';
import UpdateItem from '../components/CreateItem';

const Sell = props => (
    <div>
        <UpdateItem id={props.query.id} />
    </div>
)

export default Sell;