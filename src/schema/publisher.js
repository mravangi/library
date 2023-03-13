module.exports = `
type Query {
    test: String!
   GetBookPublisher:GetBookPublisherResponde!
   GetPublishers(text:String,limit:Int,page:Int): GetPublishersResponde!
}

    type Mutation {
        AddPublisher(input:InputAddPublisher!) :  AddPublisherResponde!
    }


    type  AddPublisherResponde {
        req: Req
        res: Res
        result:AddPublisherResult  
    }

   type GetBookPublisherResponde{
       req:Req
       res:Res
       result:GetBookPublisherResult
   }
   
   type GetPublishersResponde{
    req:Req
    res:Res
    result:GetPublishersResult
}

    type AddPublisherResult{
        ok:Boolean
        publisher:Publisher
    }

   type GetBookPublisherResult{
    ok:Boolean
    publisher:Publisher
   }

   type GetPublishersResult{
    ok:Boolean
    publishers:[Publisher]
   }

    input InputAddPublisher{
        title:String!
        image:String!
    }

    type Publisher {
        id:Int!
        title:String!
        image:String
    }

`;