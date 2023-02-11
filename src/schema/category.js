module.exports = `

    type Mutation {
        SetCategory(input: InputCategory): SetCategoryResponde
    }

    type SetCategoryResponde {
        req: Req
        res: Res
        result: SetCategoryResult
    }

    type SetCategoryResult {
        ok: Boolean!
        category: Category
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