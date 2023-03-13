const publisher = require("../schema/publisher");
const { Op } = require("sequelize");

module.exports = {
    Query: {
        test: async () => {
            return "my first graphQl api.."
        },
        GetPublishers: async (parent, args, context) => {
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

                const publisher = await models.publisher.findAll({
                    where:{
                        title: {
                            [Op.substring] : args.text
                        }
                    }
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
                    publishers: publisher
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
        },
    
        GetBookPublisher: async (parent, args, context) => {
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

                const book = await models.book.findAll({
                    where:{
                        books:publisherId
                    }
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
                    publisher: book
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
                    image:args.input.image
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
                    publishers:publisher
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

