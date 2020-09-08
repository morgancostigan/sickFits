const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken' );
require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

//DONE vvvv  use express middleware to handle cookies (JSON Web Tokens)
server.express.use(cookieParser( )); //allows access to cookies as an object

//TODO  use express middleware to populate current user
//decode JWT to get user ID on each request
server.express.use((req, res, next) => {
    const { token } = req.cookies;
    if(token) {
        const { userId } = jwt.verify(token, process.env.APP_SECRET);
        //put userId onto the req for future use
        req.userId = userId;
    }
    next(); 
})

//create a middleware to populate user on every request
server.express.use( async (req, res, next) => {
    //if no logged in user, skip
    if(!req.userId) return next();
    //if logged in user...
    const user = await db.query.user(
        {where: {id: req.userId}},
        '{ id, name, email, permissions }'
        );
        req.user = user;
        next();
});

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

