const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Mutations = {
    async createItem(parent, args, ctx, info) {
        //TODO - check if they are logged in

        const item = await ctx.db.mutation.createItem({
            data:{
                ...args
            }
        }, info)
        return item;
    },

    updateItem(parent, args, ctx, info){
        //make a copy of the updates
        const updates = { ...args };
        //remove the ID from the updates
        delete updates.id;
        //run the update method
        return ctx.db.mutation.updateItem({
            data: updates,
            where:{
                id: args.id
            },
        }, info)
    },

    async deleteItem(parent, args, ctx, info){
        const where = {id: args.id }
        //1. find the item
        const item = await ctx.db.query.item({ where }, `{id title}`);
        //2. check for permissions to delete
        //TODO
        //3. delete
        return ctx.db.mutation.deleteItem ({ where }, info); 
    },

    async signup(parent, args, ctx, info) {
        args.email = args.email.toLowerCase();
        //hash password
        const password = await bcrypt.hash(args.password, 15);
        //create user in DB
        const user = await ctx.db.mutation.createUser({
            data: {
                ...args,
                password,
                permissions: { set: ['USER']},
            },
        }, info);
        //create JWT (JSON web token) to show that user is now signed in
        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
        //set JWT as a cookie on response
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 52, //sets cookie for one year
        });
        //return user to the browser
        return user;
    },
};

module.exports = Mutations;
