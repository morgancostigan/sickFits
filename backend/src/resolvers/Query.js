const Query = {
    dogs(parent, args, ctx, info ) {// dogs() = dogs: function()
        return [{name: 'Lazlo'}, {name: 'Nadja'}];
    }
};

module.exports = Query;
