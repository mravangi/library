
module.exports = {
    Query: {
        test: async () => {
            return "my first graphQl api.."
        },
        GetCategoryes: async (parent, args, context) => {
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

                const category = await models.category.findAll({
                    where:{}
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
                    categoryes:category
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
                    ok: false,
                }
    
                return middlewares.response(req, res , result);
                
            }
        }
    },
 
    Mutation: {
        SetCategory: async (parent, args, context) => {
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

                const category = await models.category.create({
                    title: args.input.title,
                    status: args.input.status
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
                    category: category
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