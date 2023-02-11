var jwt = require('jsonwebtoken');

module.exports = {

    Mutation: {
        SetCategory: async (parent, args, context) => {
            const { models, sms, middlewares } = context;

            console.log("title = ",args.input.title , " ----- " , "status = ",args.input.status);

          return {}
        }
    }
};

