const cookieParser = require('cookie-parser');
require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

//DONE vvvv  use express middleware to handle cookies (JSON Web Tokens)
server.express.use(cookieParser( )); //allows access to cookies as an object
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

