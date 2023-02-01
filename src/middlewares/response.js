const response = (req = {code: 200 , message: ""}, res = {code: true, message: ""}, result = {}) => {
    return {
        req,
        res,
        result
    }
}

module.exports = response;