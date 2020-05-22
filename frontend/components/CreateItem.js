import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';

class CreateItem extends Component {
    state = {
        title: '',
        decription: '',
        image: '',
        largeImage: '',
        price: 0
    };

    render() {
        return (
            <Form>
                <fieldset>
                    <label htmlFor="title">
                        Title
                        <input type="text" id="title" name="title" placeholder="Title" required/>
                    </label>
                    <label htmlFor="price">
                        Price
                        <input type="text" id="price" name="price" placeholder="Price" required />
                    </label>
                    <label htmlFor="decription">
                        <input type="text" id="decription" name="decription" placeholder="Tell us about this thing." required />
                    </label>
                </fieldset>
            </Form>
        )
    }
}

export default CreateItem
