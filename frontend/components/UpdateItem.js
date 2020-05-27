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
        $title: String
        $description: String
        $price: Int
    ){
        createItem (
            title: $title
            description: $description
            price: $price
        ) {
            id
            title
            description
            price
        }
    }
`;// end const UPDATE_ITEM_MUTATION

class UpdateItem extends Component {
    state = {};

    handleChange = (e) => {
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value) : value;
        // console.log({ name, type, value });
        this.setState({ [name]: val });
    };//end handleChange
    updateItem = async (e, updateItemMutation) => {
        e.preventDefault();
        console.log('Updatin` Item!');
        console.log(this.state);
        const res = await updateItemMutation({
            variables: {
                id: this.props.id,
                ...this.state,
            }
        });
        console.log('Finished Updatin`!');
    };//end updateItem


    render() {
        return (
            <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
                {({ data, loading }) => {
                    if(loading) return <p>Loading...</p>;
                    if(!data.item) return <p>No Item Found for ID {this.props.id}</p>
                    return (
                        <Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
                            {(updateItem, { loading, error }) => (

                                <Form onSubmit={e => this.updateItem(e, updateItem)}>
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