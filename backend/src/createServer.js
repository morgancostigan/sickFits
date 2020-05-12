// creates the GraphQL Yoga server

const { GraphQLServer } = require('graphql-yoga');

const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query'); 
const db = require('./db');

function createServer() {
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Mutation, //with ES6 Mutation: Mutation is not necessary
            Query
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false
        },
        context: req => ({ ...req, db }),
    })
}//end createServer function

module.exports = createServer;