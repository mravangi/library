module.exports = `
    type Query {
        test: String!
    }

    type Mutation {
        GetMobileNumber(mobile: String!): GetMobileNumberResponde
        GetOtp(code:String!): GetOtpResponde
        GetUserInfo(input: UserInfoInput) : GetUserInfoResponde
        LoginGetMobileNumber(mobile: String!): LoginGetMobileNumberResponde
        LoginGetOtp(code: String!): LoginGetOtpResponde
    }

    type GetMobileNumberResponde {
        req: Req
        res: Res
        result: GetMobileNumberResult
    }

    type LoginGetMobileNumberResponde {
        req: Req
        res: Res
        result: LoginGetMobileNumberResult
    }

    type GetOtpResponde {
        req: Req
        res: Res
        result: GetOtpResult
    }

    type GetUserInfoResponde {
        req: Req
        res: Res
        result: GetUserInfoResult
    }

    type LoginGetOtpResponde {
        req: Req
        res: Res
        result: LoginGetOtpResult
    }

    
    input UserInfoInput {
        firstName: String!
        lastName: String!
        gender: Gender!
        mobile: String!
        nationalCode: String!
    }


    type GetMobileNumberResult{ 
        ok: Boolean
        token: String
    }

    type LoginGetMobileNumberResult{ 
        ok: Boolean
        token: String
    }

    type GetOtpResult{ 
        ok: Boolean
        token: String
    }

    type GetUserInfoResult {
        ok: Boolean
        token: String
        user: User
    }

    type User {
        id: Int
        firstName: String!
        lastName: String!
        gender: Gender!
        mobile: String!
        nationalCode: String!
    }

    type LoginGetOtpResult {
        ok: Boolean
        token: String
        user: User
    }
`;