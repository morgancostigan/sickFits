import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components'; 
import PropTypes from 'prop-types';
import { CURRENT_USER_QUERY } from './User';

const BigButton = styled.button`
    font-size: 3rem;
    background: none;
    border: 0;
    &:hover{
        color: ${props => props.theme.red};
        cursor: pointer;
    }
`;//end BigButton

class RemoveFromCart extends Component {
    static PropTypes = {
        id: PropTypes.string.isRequired,
    };
    render() {
        return <BigButton title="Delete Item">
            &times;
        </BigButton>
    }
};//end RemoveFromCart

export default RemoveFromCart;