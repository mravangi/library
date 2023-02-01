const models = require('../../models');
const middlewares = require('../../src/middlewares');
const sms = require('../../utils/sms');

module.exports = async (ctx) => {
    const { req } = ctx;
                   
    return {
        models,
        middlewares,
        req,
        sms
    };
}
