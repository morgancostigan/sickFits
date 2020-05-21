 import React, { Component } from 'react';
 import { Query } from 'react-apollo';
 import gql from 'graphql-tag';

 const ALL_ITEMS_QUERY = gql`
    query ALL_ITEMS_QUERY {
        items {
            id
            title
            decription
            price
            image
            largeImage
        }
    }
 `;
 
 export default class Items extends Component {
     render() {
         return (
             <div>
                 <p>Items!</p>
                 {/* vvv the only allowed child of a query is a function vvv */}
                 <Query query={ALL_ITEMS_QUERY}> 
                    {(payload) => {
                        console.log({payload});
                        return <p>I'm query's kid, do you know my dad?</p>
                    }}
                 </Query>
             </div>
         )
     }
 }
 