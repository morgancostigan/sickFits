import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';

const SINGLE_ITEM_QUERY = gql`
    query SINGLE_ITEM_QUERY($id: ID!){
        item(where: { id: $id }){
            id
            title
            description
            price
        }
    }
`;

const UPDATE_ITEM_MUTATION = gql`
    mutation UPDATE_ITEM_MUTATION(
        $title: String!
        $description: String!
        $price: Int!
    ){
        createItem (
            title: $title
            description: $description
            price: $price
        ) {
            id
        }
    }
`;// end const UPDATE_ITEM_MUTATION

class UpdateItem extends Component {
    state = {};

    handleChange = (e) => {
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value) : value;
        console.log({ name, type, value });

        this.setState({ [name]: val });
    }


    render() {
        return (
            <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
                {({ data, loading }) => {
                    if(loading) return <p>Loading...</p>;
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
                                    console.log({ res });
                                    Router.push({
                                        pathname: '/item',
                                        query: { id: res.data.createItem.id },
                                    })
                                }}>
                                    <Error error={error} />
                                    <fieldset disabled={loading} aria-busy={loading}>

                                        <label htmlFor="title">
                                            Title
                                            <input
                                                type="text"
                                                id="title"
                                                name="title"
                                                placeholder="Title"
                                                required
                                                defaultValue={data.item.title}
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
                                                defaultValue={data.item.price}
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
                                                defaultValue={data.item.description}
                                                onChange={this.handleChange}
                                            />
                                        </label>
                                        <button type="submit">Change It!</button>
                                    </fieldset>
                                </Form>
                            )}
                        </Mutation>
                    )//end Query return
                }}
            </Query>
        )// end return
    }//end render
}// end class UpdateItem extends Component

export default UpdateItem;
export { UPDATE_ITEM_MUTATION }; 