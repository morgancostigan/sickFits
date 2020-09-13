const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto'); //for generating random tokens
const { promisify } = require('util'); //for changing callback function to a promise
const { transport, makeANiceEmail } = require('../mail');
const { hasPermission } = require('../utils');


const Mutations = {
    async createItem(parent, args, ctx, info) {
        //TODO - check if they are logged in
        if(!ctx.request.userId){
            throw new Error('Ya gotta be logged in for that!');
        }

        const item = await ctx.db.mutation.createItem({
            data:{
                //this is how we form a relationship between the new object and the user
                user: {
                    connect: {
                        id: ctx.request.userId
                    }
                },
                ...args
            }
        }, info)
        return item;
    },//end createItem

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
    },//end updateItem

    async deleteItem(parent, args, ctx, info){
        const where = {id: args.id }
        //1. find the item
        const item = await ctx.db.query.item({ where }, `{id title user{id}}`);
        
        //2. check for ownership or permissions to delete
        const ownsItem = item.user.id === ctx.request.userId;
        const hasPermissions = ctx.request.user.permissions.some(
            permission => ['ADMIN', 'ITEMDELETE'].includes(permission)
        );
        if(!ownsItem && !hasPermissions){
            throw new Error(`You're not allowed mate.`);
        }//end if
        //3. delete
        return ctx.db.mutation.deleteItem ({ where }, info); 
    },//end deleteItem

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
    },//end signup

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
    },//end signin

    signout(parent, args, ctx, info) {
        ctx.response.clearCookie('token'); //this is available with cookie-parser
        return {message: 'Adios!'};
    },//end signout

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
        //3 email the reset token to user
        const mailRes = await transport.sendMail({
            from: 'me@there.com',
            to: user.email,
            subject: 'Your Password Reset Token',
            html: makeANiceEmail(`Your Password Reset Token is here! 
            \n\n 
            <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">
            Click here to reset.
            </a>`),
        });
        //4 return the message
        return { message: 'Thanking you!' };
    },//end requestReset

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
    },//end resetPassword

    async updatePermissions(parent, args, ctx, info) {
        //1 check if logged in
        if (!ctx.request.userId) {
            throw new Error('Ya gotta be logged in for that!');
        }
        //2 query current user
        const currentUser = await ctx.db.query.user({
            where: {
                id: ctx.request.userId,
            },
        }, info );
        // console.log('currentUser', currentUser);
        //3 check for permission to update
        hasPermission(currentUser, ['ADMIN', 'PERMISSIONUPDATE']);
        //4 update permissions
        return ctx.db.mutation.updateUser({
            data: {
                permissions: {
                    set: args.permissions
                }
            },
            where: {
                id: args.userId
            },
        }, info );
    },//end updatePermissions

    async addToCart(parent, args, ctx, info) {
        //1 check that user is signed in
        const userId = ctx.request.userId;
        if (!ctx.request.userId) {
            throw new Error('Ya gotta be logged in for that!');
        }
        //2 query their current cart
        const [existingCartItem] = await ctx.db.query.cartItems({
            where: {
                user: { id: userId },
                item: { id: args.id },
            },
        });
        //3 check if item is already in cart and increment by one if true
        if(existingCartItem) {
            console.log('Already in the cart, adding another!');
            return ctx.db.mutation.updateCartItem({
                where: { id: existingCartItem.id },
                data: { quantity: existingCartItem.quantity + 1 },
            }, info);
        };// end IF
        //4 if false, create fresh CartItem
        return ctx.db.mutation.createCartItem({
            data: {
                user: { connect: { id: userId },},
                item: { connect: { id: args.id },},
            },
        }, info );
    },//end addToCart

};

module.exports = Mutations;
