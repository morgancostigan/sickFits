const { forwardTo } = require('prisma-binding');

const Query = {
    items: forwardTo('db'), 
    //this directs the request through prisma.graphql so you don't need to rewrite it

    // async items(parent, args, ctx, info) {
    //     const items =  ctx.db.query.items();
    //     return items;
    // }
};

module.exports = Query;
