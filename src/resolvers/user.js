const models = require('../../models');
const sms = require('../../utils/sms');

module.exports = {
    Query: {
        test: async (parent, args, context) => {
            return "my first graphQl api.."
        }
    },

    Mutation: {
        getMobileNumber: async (parent, args, context) => {

           const user = await models.user.findOne({
            where: {
                mobile: args.mobile
            }
           });

           if(user) {
             return {
                text: "you'r mobile number exist in db."
            }
           } else {

            let code = (1000 + Math.random() * 9000).toFixed(0);
            await sms.otp(args.mobile, code);

            await models.verification.create({
                mobile: args.mobile,
                code: code
            })

            return {
                text: "please insert otp code!"
            }
           }


        },

        getOtp: async (parent, args, context) => {
            const verification = await models.verification.findOne({
                where: {
                    mobile: args.mobile
                },
                order: [['id', 'DESC']] //ascend
            })

            if (verification){
                if(verification.code == args.code) {
                    return {
                        text: "corect!"
                    }
                }else {
                    return {
                        text: "try again!"
                    }
                }
            } else {
                return {
                    text: "ops!"
                }
            }
        }
    }
};

