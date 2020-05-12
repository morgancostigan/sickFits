//  Uses GraphQL Yoga and Prisma binding to connect Apollo to the Prisma DB 

const { Prisma } = require ('prisma-binding');  //require rather than import because of the limitations of node.js
const db = new Prisma({
    typeDefs: 'src/generated/prisma.graphql', 
    endpoint: process.env.PRISMA_ENDPOINT, //indirect link to DB
    secret: process.env.PRISMA_SECRET, //secret password for the DB, to be turned on in the prisma.yml file before production
    debug: false //if TRUE, it will console log all queries and mutations 
});

module.exports = db; //exports DB for use throughout the application

