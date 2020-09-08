import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import gql from 'graphql-tag';
import Table from './styles/Table';
import SickButton from './styles/SickButton';
import PropTypes from 'prop-types';

const possiblePermissions = [
    'USER',
    'ADMIN',
    'ITEMCREATE',
    'ITEMUPDATE',
    'ITEMDELETE',
    'PERMISSIONUPDATE'
];

const ALL_USERS_QUERY = gql `
    query {
        users {
            id
            name
            email
            permissions
        }
    }
`;

const Permissions = (props) => (
    <Query query={ALL_USERS_QUERY}>
        {({data, loading, error}) => 
        console.log(data) || (
            <div>
                <Error error={error} />
                <div>
                    <h1>Manage Permissions</h1>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                {possiblePermissions.map(permission => 
                                <th>{permission}</th>)}
                                <th>⇩</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.users.map(user => <User user={user}/>)}
                        </tbody>                    
                    </Table>
                </div>
            </div>
        )}
    </Query>
);//end const Permissions

class User extends React.Component {
    static propTypes = {
        user: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            email: PropTypes.string,
            permissions: PropTypes.array,
        }).isRequired
    };
    render () {
        const user = this.props.user;
        return (
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {possiblePermissions.map(permission => (
                    <td>
                        <label htmlFor={`${user.id}-permission-${permission}`}>
                            <input type="checkbox" />
                        </label>
                    </td>
                ))}
                <td>
                    <SickButton>Update</SickButton>
                </td>
            </tr>
        )
    }
}//end

export default Permissions;