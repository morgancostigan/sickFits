import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
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

    async uploadFile = (e) => {
        console.log(`uploadin'...`);
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload-preset', 'sickfits');

        const res = await fetch('https://api.cloudinary.com/v1_1/dcrq0v21d/image/upload');
    }

    render() {
        return (
            <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
                {(createItem, { loading, error }) => (

                    <Form onSubmit={async e => {
                        //vvv stop form from submitting vvv
                        e.preventDefault();
                        //vvv call the mutation vvv
                        const res = await createItem();
                        //vvv move user to single item page for item they just submitted vvv
                        console.log(res);
                        Router.push({
                            pathname: '/item',
                            query: {id: res.data.createItem.id }
                        })
                    }}>
                        <Error error={error}/>
                        <fieldset disabled={loading} aria-busy={loading}>
                            <label htmlFor="file">
                                Image
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    placeholder="Upload an image"
                                    required
                                    value={this.state.image}
                                    onChange={this.uploadFile}
                                />
                            </label>
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
}// end class CreateItem extends Component

export default CreateItem;
export { CREATE_ITEM_MUTATION }; 