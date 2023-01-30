const { GraphQLError } = require('graphql');
const throwError = (message, code, argumentName) => {
    throw new GraphQLError(message, {
        extensions: {
            code,
            argumentName,
        },
      });
}

module.exports = throwError;