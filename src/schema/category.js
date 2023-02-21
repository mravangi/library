module.exports = `
    type Query {
        test: String!
        GetCategoryes: GetCategoryesResponde 
    } 
    type Mutation {
        SetCategory(input: InputCategory!): SetCategoryResponde
    }

    type SetCategoryResponde {
        req: Req
        res: Res
        result: SetCategoryResult
    }

    type GetCategoryesResponde {
        req: Req
        res: Res
        result: GetCategoryesResult
    }

    type SetCategoryResult {
        ok: Boolean!
        category: Category
    }

    type GetCategoryesResult {
        ok: Boolean!
        categoryes: [Category]
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

    enum Status {
        active
        deacctive
    }

`;