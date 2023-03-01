module.exports = `
type Query {
    test: String!
    
}

    type Mutation {
        AddPublisher(input:InputAddPublisher!) :  AddPublisherResponde
    }


    type  AddPublisherResponde {
        req: Req
        res: Res
        result:AddPublisherResult  
    }


    type AddPublisherResult{
        ok:Boolean
        publisher:Publisher
    }

    input InputAddPublisher{
        title:String!
        image:String!
    }

    type Publisher {
        id:Int
        title:String!
        image:String!
    }

`;