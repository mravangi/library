module.exports = `
    type Query {
        test: Test!
    }

    type Test {
        key : String
    }

    type Client {
        id: Int!
        fname: String!
        lname: String!
        nationalCode: String!
        mobile: String!
        gender: String!
        image: String
    }
`;