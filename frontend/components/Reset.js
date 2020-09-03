import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';

const RESET_MUTATION = gql`
    mutation RESET_MUTATION( 
        $resetToken: String!, 
        $password: String!,
        $comfirmPassword: String!
     ) {
        resetPassword ( 
            resetToken: $resetToken,
            password: $password
            confirmPassword:$confirmPassword
         ) {
            id
            email
            name 
        }
    }
`;

class Reset extends Component {
    state = {
        email: ''
    };
    saveToState = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Mutation
                mutation={RESET_MUTATION}
                variables={this.state}
            >
                {(reset, { error, loading, called }) => {
                    return (
                        <Form method="post"
                            onSubmit={async e => {
                                e.preventDefault();
                                const res = await reset();
                                console.log(res);
                                this.setState({ email: '' });
                            }}>
                            <fieldset disabled={loading} aria-busy={loading}>
                                <h2>Reset Your Password</h2>
                                <Error error={error} />
                                {!error && !loading && called && <p>Reset link sent to your email. Dig.</p>}
                                <label htmlFor="email">
                                    Email
                                <input
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        value={this.state.email}
                                        onChange={this.saveToState}
                                    />
                                </label>
                                <button type="submit">Request Reset</button>
                            </fieldset>
                        </Form>)
                }}
            </Mutation>
        )
    }
};

export default Reset;