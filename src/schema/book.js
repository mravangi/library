module.exports = `

    type Mutation {
        AddBook(input:InputAddBook!) :  AddBookResponde
    }


    type  AddBookResponde {
        req: Req
        res: Res
        result:AddBookResult  
    }

    type AddBookResult{
        ok:Boolean
        book:Book
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

`;