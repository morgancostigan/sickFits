import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';


const UPDATE_ITEM_MUTATION = gql`
    mutation UPDATE_ITEM_MUTATION(
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
`;// end const UPDATE_ITEM_MUTATION

class UpdateItem extends Component {
    state = {
        title: '',
        description: '',
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
            <Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
                {(createItem, { loading, error }) => (

                    <Form onSubmit={async e => {
                        //TODO - Wait for image upload before submission

                        //vvv stop form from submitting vvv
                        e.preventDefault();
                        //vvv call the mutation vvv
                        const res = await createItem();
                        //vvv move user to single item page for item they just submitted vvv
                        console.log({res});
                        Router.push({
                            pathname: '/item',
                            query: {id: res.data.createItem.id },
                        })
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
                            <label htmlFor="description">
                                <textarea
                                    type="text"
                                    id="description"
                                    name="description"
                                    placeholder="Tell us about this thing."
                                    required
                                    value={this.state.description}
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
}// end class UpdateItem extends Component

export default UpdateItem;
export { UPDATE_ITEM_MUTATION }; 