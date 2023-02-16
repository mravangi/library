module.exports = `
type Query {
    test: String!
    GetBooks:GetBooksResponde! 
}

    type Mutation {
        AddBook(input:InputAddBook!) :  AddBookResponde
    }


    type  AddBookResponde {
        req: Req
        res: Res
        result:AddBookResult  
    }

    type GetBooksResponde{
        req: Req
        res: Res
        result:GetBooksResult  
    }

    type AddBookResult{
        ok:Boolean
        book:Book
    }

    type GetBooksResult {
        ok:Boolean
        books:[Book]
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