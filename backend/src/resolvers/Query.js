const { forwardTo } = require('prisma-binding');

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
    },

};

module.exports = Query;
