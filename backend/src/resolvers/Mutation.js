const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto'); //for generating random tokens
const { promisify } = require('util'); //for changing callback function to a promise
const { transport, makeANiceEmail } = require('../mail');

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
    async signin (parent, {email, password}, ctx, info) { //destructured args into {email, password}
        //1 is there a user with this email
        const user = await ctx.db.query.user({where: {email}});
        if(!user) {
            throw new Error(`No user found for email ${email}`);
        }
        //2 is their password correct
        const valid = await bcrypt.compare(password, user.password);
        if(!valid){
            throw new Error(`Invalid Password!`);
        }
        //3 generate JWT token
        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET); 
        //4 set the cookie with the token
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 52, //sets cookie for one year
        });
        //5 return the user
        return user;
    },
    signout(parent, args, ctx, info) {
        ctx.response.clearCookie('token'); //this is available with cookie-parser
        return {message: 'Adios!'};
    },
    async requestReset(parent, args, ctx, info) {
        //1 check if real user
        const user = await ctx.db.query.user({where: {email: args.email}});
        if(!user){
            throw new Error(`No user found for email ${args.email}`);
        };
        //2 set a reset token and expiry
        const randomBytesPromise = promisify(randomBytes);
        const resetToken = (await randomBytesPromise(20)).toString('hex');
        const resetTokenExpiry = Date.now() + 3600000; //1 hour from now
        const res = await ctx.db.mutation.updateUser({
            where: {email: args.email},
            data: {
                resetToken,
                resetTokenExpiry
            }
        });

        return { message: 'Thanking you!' };
        //3 email the reset token to user

    },
    async resetPassword(parent, args, ctx, info) {
        //1 check if passwords match
        if(args.password !== args.confirmPassword) {
            throw new Error(`Dude, these passwords don't match. The hell?`);
        }
        //2 check if resetToken is valid
        //3 check if resetToken is expired
        const [user] = await ctx.db.query.users({ //we will query users (plural) because it gives a lot more sorting options than user
            where: {
                resetToken: args.resetToken,
                resetTokenExpiry_gte: Date.now() - 3600000, //an hour ago
            },
        });
        if(!user) {
            throw new Error(`JRR Broken Token. Token is invalid or expired.`);
        };
        //4 hash new password
        const password = await bcrypt.hash(args.password, 15); 
        //5 save new password to user and remove resetToken
        const updatedUser = await ctx.db.mutation.updateUser({
            where: {
                email: user.email
            },
            data: {
                password,
                resetToken: null,
                resetTokenExpiry: null,
            },
        });
        //6 generate JWT token
        const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET); 
        //7 set the JWT token cookie
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 52, //sets cookie for one year
        });
        //8 return "new" user
        return updatedUser;
    },
};

module.exports = Mutations;
