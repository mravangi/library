module.exports = `
    type Query {
        test: String!
    }

    type Mutation {
        getMobileNumber(mobile: String!): MobileVerificationRespone
    }

    type MobileVerificationRespone {
        text: String
    }
`;