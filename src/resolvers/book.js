
module.exports = {

    Mutation: {
        AddBook: async (parent, args, context) => {
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

                const book = await models.book.create({
                    title: args.input.title,
                    category: args.input.category,
                     description: args.input. description,
                     author: args.input. author,
                    volume: args.input. volume,
                      publisher: args.input.  publisher,
                      count: args.input. count,
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
                   book: book
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

