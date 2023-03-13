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
        AddBook(input:InputAddBook!) :  AddBookResponde
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

    type  AddBookResponde {
        req: Req
        res: Res
        result:AddBookResult  
    }

    
    input UserInfoInput {
        firstName: String!
        lastName: String!
        gender: Gender!
        mobile: String!
        nationalCode: String!
    }

    input InputAddBook {
        category : Int!
        title : String!
        description :String!
        author : String!
        volume : String!
        publisher : String!
        count : Int!
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

    type AddBookResult{
        ok:Boolean
        book:Book
    }

    type User {
        id: Int
        firstName: String!
        lastName: String!
        gender: Gender!
        mobile: String!
        nationalCode: String!
    }

    type Book {
        id:Int
        title:String!
        category:Int!
        description:String!
        author:String!
        volume:String!
        publisher:String!
        count:Int!
    }

    type LoginGetOtpResult {
        ok: Boolean
        token: String
        user: User
    }

    enum Gender{
        female
        male
    }

`;