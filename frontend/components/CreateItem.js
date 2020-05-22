import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';

const CREATE_ITEM_MUTATION = gql`
    mutation CREATE_ITEM_MUTATION(
        $title: String!
        $description: String!
        $price: Int!
        $image: String
        $largeImage: String
    ){
        createItem (
            title: $title
            description: $description
            price: $price
            image: $image
            largeImage: $largeImage
        ) {
            id
        }
    }
`;// end const CREATE_ITEM_MUTATION

class CreateItem extends Component {
    state = {
        title: '',
        decription: '',
        image: '',
        largeImage: '',
        price: 0
    };

    handleChange = (e) => {
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value) : value;
        console.log({ name, type, value });

        this.setState({ [name]: val });
    }

    render() {
        return (
            <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
                {(createItem, { loading, error }) => (

                    <Form onSubmit={(e) => {
                        e.preventDefault();
                        console.log(this.state);

                    }}>
                        <Error error={error}/>
                        <fieldset disabled={loading} aria-busy={loading}>
                            <label htmlFor="title">
                                Title
                        <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="Title"
                                    required
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                />
                            </label>
                            <label htmlFor="price">
                                Price
                        <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    placeholder="Price"
                                    required
                                    value={this.state.price}
                                    onChange={this.handleChange}
                                />
                            </label>
                            <label htmlFor="decription">
                                <textarea
                                    type="text"
                                    id="decription"
                                    name="decription"
                                    placeholder="Tell us about this thing."
                                    required
                                    value={this.state.decription}
                                    onChange={this.handleChange}
                                />
                            </label>
                            <button type="submit">Submit It!</button>
                        </fieldset>
                    </Form>
                )}
            </Mutation>
        )// end return
    }
}// end class CreateItem extends Component

export default CreateItem;
export { CREATE_ITEM_MUTATION }; 