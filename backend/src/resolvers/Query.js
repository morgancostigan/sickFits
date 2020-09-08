const { forwardTo } = require('prisma-binding');
const { hasPermissions } = require('../utils');

const Query = {
    items: forwardTo('db'), 
    item: forwardTo('db'),  
    itemsConnection: forwardTo('db'),
    //this directs the request through prisma.graphql so you don't need to rewrite it
    me(parent, args, ctx, info) {
        //check if there's a current userId
        if(!ctx.request.userId) {
            return null; 
        }
        return ctx.db.query.user({
            where: {id: ctx.request.userId},
        }, info )
    }, //end me
    async users(parent, args, ctx, info) {
        //1 check that user is logged in
        if(!ctx.request.userId){
            throw new Error('You must be logged in to do that!');
        }
        //2 check if user has permission to query all users
        hasPermissions(ctx.request.user, ['ADMIN', 'PERMISSION_UPDATE']);
        //3 if yeah, query all users dammit
        return ctx.db.users({}, info); 
    }, //end users
};

module.exports = Query;
