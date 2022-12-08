module.exports = {
    Query: {
        test: async (parent, args, context) => {
            return {
                key: "my first graphQl api.."
            };
        }
    }
};

