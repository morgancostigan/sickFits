require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

//TODO  use express middleware to handle cookies (JSON Web Tokens)
//TODO  use express middleware to populate current user
server.start(
    {
        cors: {
            credentials: true,  //authenticated users only
            origin: process.env.FRONTEND_URL, //ensures only calls from this application are allowed through
        }
    }, 
    dirtyDeets => {
        console.log(`Server is now running on port: http://localhost:${dirtyDeets.port}`);
    }
);

