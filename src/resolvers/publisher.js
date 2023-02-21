
module.exports = {
    Query: {
        test: async () => {
            return "my first graphQl api.."
        }
    },

    Mutation: {
        AddPublisher: async (parent, args, context) => {
            const { models, middlewares, user } = context;
            
            if(!user) {

                const req = {
                    code: 401,
                    message: "Unathorized"
                }

                const res = {
                    code: false,
                    message: "کاربر لاگین نکرده است"
                }

                return middlewares.response(req, res, {ok:false});
            }
            try {

                const publisher = await models.publisher.create({
                    title: args.input.title,
                    image : args.input.image
                })
    
                const req = {
                    code : 200,
                    message : "sucess"
                };
    
                const res = {
                    code : true,
                    message: "sucess"
                }
    
                const result = {
                    ok: true,
                  publisher: publisher
                }
    
                return middlewares.response(req, res , result);
                
            } catch (error) {
                const req = {
                    code : 500,
                    message : "Server error"
                };
    
                const res = {
                    code : false,
                    message: "خطایی رخ داده است"
                }
    
                const result = {
                    ok: false
                }
    
                return middlewares.response(req, res , result);
                
            }

        },
    }
};

