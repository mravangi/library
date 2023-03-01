module.exports = `
   type Query {
       test: String!
       GetCategories: GetCategoriesResponde!
    }
    type Mutation {
        SetCategory(input: InputCategory!): SetCategoryResponde
    }

    type SetCategoryResponde {
        req: Req
        res: Res
        result: SetCategoryResult
    }
    

    type GetCategoriesResponde {
        req: Req
        res: Res
        result:GetCategoriesResult
    }

    type SetCategoryResult {
        ok: Boolean!
        category: Category
    }

    type GetCategoriesResult {
        ok: Boolean!
        categories: [Category]
    }

    type Category {
        id: Int
        title: String
        status: Status
    }

    input InputCategory {
        title: String!
        status: Status!
    }

    input InputGetCategories {
        title: String!
        status: Status!
    }
    

    enum Status {
        active
        deacctive
    }

`;