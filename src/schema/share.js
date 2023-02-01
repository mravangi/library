module.exports = `
    type Paginate {
        total:Int!
        pages:Int!
        page: Int!
        limit: Int!
    }

    type Req {
        code: Int
        message: String
    }

    type Res {
        code: Boolean
        message: String
    }

    
    enum Gender {
        male
        female
    }

    type GeneralResult {
        ok: Boolean
        message: String
    }

`;
