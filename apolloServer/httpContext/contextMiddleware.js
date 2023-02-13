const models = require('../../models');
const middlewares = require('../../src/middlewares');
const sms = require('../../utils/sms');
const jwt = require('jsonwebtoken');

module.exports = async (ctx) => {
    const { req } = ctx;
    const token = req.headers['x-token'];

    let user = null;

    if(token){
        try {
            var decoded = jwt.verify(token, process.env.SECRET);

            user = await models.user.findOne({
                where: {
                    mobile: decoded.data
                }
            })
          } catch(err) {
            //
          }
    }
   
    return {
        models,
        middlewares,
        req,
        sms,
        user
    };
}
