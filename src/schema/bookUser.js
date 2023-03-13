module.exports = `
type Query {
    test: String!
}

    type Mutation {
        AddBookUser(input:InputAddBookUser!) :  AddBookUserResponde!
        
    }


    type  AddBookUserResponde {
        req: Req
        res: Res
        result:AddBookUserResult  
    }


    type AddBookUserResult{
        ok:Boolean
        book_user:Book_User
    }

  

    type Book_User {
        id:Int!
        book:Int!
        status:Status
    }

    input InputAddBookUser {
        book:Int!
        status:Status!
    }

    enum Status {
        reserve
        taken
        available
    }
`;