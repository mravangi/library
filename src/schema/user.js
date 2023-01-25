module.exports = `
    type Query {
        test: String!
    }

    type Mutation {
        getMobileNumber(mobile: String!): Responde
        getOtp(mobile: String!, code:String!): Responde
    }


    type Responde {
        text: String
    }
`;