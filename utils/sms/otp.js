const request = require('request');


function send(number, otpCode) {
    request.post({
        url: 'http://ippanel.com/api/select',
        body: {
        "op":"pattern",
        "user": process.env.SMS_USER,
        "pass":process.env.SMS_PASS,
        "fromNum": process.env.SMS_NUMBER,
        "toNum": number,
        "patternCode":process.env.OTP,
        "inputData":[
            {"code":otpCode}	
        ]
    },
        json: true,
    }, function (error, response) {
        if (!error && response.statusCode === 200) {
            //YOU‌ CAN‌ CHECK‌ THE‌ RESPONSE‌ AND SEE‌ ERROR‌ OR‌ SUCCESS‌ MESSAGE
            console.log(response.body);
            return response.body;
        } else {
            console.log("whatever you want");
            throw error;
        }
    });
}

module.exports = send;