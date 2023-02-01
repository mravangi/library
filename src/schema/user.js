module.exports = `
    type Query {
        test: String!
    }

    type Mutation {
        GetMobileNumber(mobile: String!): GetMobileNumberResponde
        GetOtp(code:String!): GetOtpResponde
        GetUserInfo(input: UserInfoInput) : GetUserInfoResponde
    }

    type GetMobileNumberResponde {
        req: Req
        res: Res
        result: GetMobileNumberResult
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
`;