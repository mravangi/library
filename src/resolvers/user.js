var jwt = require('jsonwebtoken');

module.exports = {
    Query: {
        test: async () => {
            return "my first graphQl api.."
        }
    },

    Mutation: {
        GetMobileNumber: async (parent, args, context) => {
            const { models, sms, middlewares } = context;

            if(!args.mobile) {
                const req = {
                    code : 400,
                    message: "Bad Request"
                }
    
                const res = {
                    code: false,
                    message: "ارسال شماره همراه اجباری میباشد."
                }
    
                return middlewares.response( req, res ,  {});
            }

           const user = await models.user.findOne({
            where: {
                mobile: args.mobile
            }
           });

           if(user) {
          
            const req = {
                code : 200,
                message: "success"
            }

            const res = {
                code: false,
                message: "شماقبلا ثبت نام کرده اید."
            }

            const result = {}
            
            return middlewares.response( req, res ,  result);

           } else {

            const verifications = await models.verification.findAll({
                where: {
                    mobile: args.mobile
                },
                order: [['id', 'DESC']] //ascend
            })

            let forbiden = 0;

            if(verifications.length>=5){
                //one hr => ms
                verifications.forEach(element => {
                    if(new Date().getTime()-element.createdAt<(60*60*1000)){
                        forbiden += 1;
                    }
              });

              if(forbiden!=0){
                const req = {
                    code : 429,
                    message: "too many requests"
                }
    
                const res = {
                    code: false,
                    message: "یک ساعت بعد تلاش کنید."
                }
    
                const result = {}
                
                return middlewares.response( req, res ,  result);
              }

            }
        

            let code = (1000 + Math.random() * 9000).toFixed(0);
            await sms.otp(args.mobile, code);

            await models.verification.create({
                mobile: args.mobile,
                code: code
            })

            const token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 2),
                data: args.mobile
              }, process.env.SECRET);

            

            return  {
                req: {
                    code: 200,
                    message: "success"
                },
                res: {
                    code: true,
                    message: "success"
                },
                result: { 
                    ok: true,
                    token: token
                }
            }
           }
        },

        GetOtp: async (_, args, context) => {
            const { models, middlewares, req } = context;

            const verificationToken = req.headers['verification-token'];
            if(!verificationToken) {
                const req = {
                    code: 400,
                    message: "Bad Request"
                }

                const res = {
                    code: false,
                    message: "ارسال توکن اجباریست"
                }

                const result = {}

                return middlewares.response(req, res , result);


            }

            let decoded = null;

            try {
                decoded = jwt.verify(verificationToken, process.env.SECRET);
              } catch(err) {

                const req = {
                    code: 402,
                    message: "Request Fiald"
                }

                const res = {
                    code: false,
                    message: "توکن معتبر نیست"
                }

                const result = {}

                return middlewares.response(req, res , result);

              }

            const verification = await models.verification.findOne({
                where: {
                    mobile: decoded.data
                },
                order: [['id', 'DESC']] //ascend
            })

            if (verification){
                if(verification.code == args.code) {
                    const token = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 10),
                        data: decoded.data
                      }, process.env.SECRET);

                      const req = {
                        code: 200,
                        message: "success"
                    }
    
                    const res = {
                        code: true,
                        message: "success"
                    }
    
                    const result = {
                        ok: true,
                        token: token
                    }
    
                    return middlewares.response(req, res , result);
                }else {
                    const req = {
                        code: 200,
                        message: "success"
                    }
    
                    const res = {
                        code: false,
                        message: "کد ارسالی معتبر نیست"
                    }
    
                    const result = {}
    
                    return middlewares.response(req, res , result);
                }
            } else {
                const req = {
                    code: 409,
                    message: "conflict"
                }

                const res = {
                    code: false,
                    message: "به این شماره کد ارسال نشده است"
                }

                const result = {}

                return middlewares.response(req, res , result);
            }
        },

        GetUserInfo: async (parent, args, context) => {
            const { models, middlewares, req } = context;

            
            const verificationToken = req.headers['fs-verification-token'];
            if(!verificationToken) {
                const req = {
                    code: 400,
                    message: "Bad Request"
                }

                const res = {
                    code: false,
                    message: "ارسال توکن اجباریست"
                }

                const result = {}

                return middlewares.response(req, res , result);

            }

            try {
                var decoded = jwt.verify(verificationToken, process.env.SECRET);
              } catch(err) {
                const req = {
                    code: 402,
                    message: "Request Fiald"
                }

                const res = {
                    code: false,
                    message: "توکن معتبر نیست"
                }

                const result = {}

                return middlewares.response(req, res , result);
              }

              if(!decoded){
                const req = {
                    code: 402,
                    message: "Request Fiald"
                }

                const res = {
                    code: false,
                    message: "توکن معتبر نیست"
                }

                const result = {}

                return middlewares.response(req, res , result);
              }

              const token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30 * 6),
                data: args.mobile
              }, process.env.SECRET);

              try {
                const user = await models.user.create({
                    role: "client",
                    firstName: args.input.firstName,
                    lastName: args.input.lastName,
                    gender: args.input.gender,
                    mobile: args.input.mobile,
                    nationalCode: args.input.nationalCode,
                    token: token
                })

                const req = {
                    code: 200,
                    message: "success"
                }

                const res = {
                    code: true,
                    message: "success"
                }

                const result = {
                    ok: true,
                    token: token,
                    user: user
                }

                return middlewares.response(req, res , result);
              } catch (error) {
                const req = {
                    code: 402,
                    message: "Request Fiald"
                }

                const res = {
                    code: false,
                    message: error.message
                }

                const result = {}

                return middlewares.response(req, res , result);
              }
            
        }
    }
};

