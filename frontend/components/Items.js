 import React, { Component } from 'react';
 import { Query } from 'react-apollo';
 import gql from 'graphql-tag';

 const ALL_ITEMS_QUERY = gql`
    query ALL_ITEMS_QUERY {
        items {
            id
            title
            description
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
                    {({ data, error, loading }) => {
                        console.log({data});
                        if (loading) return <p>loading...</p>
                        if (error) return <p>Error: {error.message}</p>
                        return <p>Heeeeeere's {data.items.length} items!</p>
                    }}
                 </Query>
             </div>
         )
     }
 }
 