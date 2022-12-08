const models = require('../../models');



module.exports = async (ctx) => {
    const { connectionParams } = ctx;
    const SECRET = "CLIENTSECRET";
    let check = await models.Client.wsCheckToken(connectionParams , models, SECRET);
    return {
        check
    };
}
