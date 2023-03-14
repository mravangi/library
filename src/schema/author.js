module.exports = `
type Query {
    test: String!
}

    type Mutation {
        AddAuthor(input:InputAddAuthor!) :   AddAuthorResponde!
        
    }


    type AddAuthorResponde {
        req: Req
        res: Res
        result: AddAuthorResult  
    }


    type  AddAuthorResult{
        ok:Boolean
        author:Author
    }

   

    type Author {
        id:Int
        firstName:String!
        lastName:String!
        mobileNumber:String!
    }

    input InputAddAuthor {
       firstName:String!
       lastName:String!
       mobileNumber:String!
    }
`;