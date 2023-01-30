/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
require('app-module-path').addPath(__dirname);
const path = require('path');
const { GraphQLError } = require('graphql');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const { mergeResolvers } = require('@graphql-tools/merge');
const { loadFilesSync } = require('@graphql-tools/load-files');
const contextMiddleware = require('./httpContext/contextMiddleware');
const socketContextMiddleware = require('./socketContext/contextMiddleware');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { WebSocketServer } = require('ws');
const { useServer } = require('graphql-ws/lib/use/ws');
const { 
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
 } = require('apollo-server-core');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, '../src/schema')), { all: true });
const resolvers = mergeResolvers(loadFilesSync(path.join(__dirname, '../src/resolvers')));

const httpServer = require('./httpServer');
const schema = makeExecutableSchema({ typeDefs , resolvers });

// Create our WebSocket server using the HTTP server we just set up.
const wsServer = new WebSocketServer({
  server: httpServer,
  path: '/api',
});

// Save the returned server's info so we can shutdown this server later
const serverCleanup = useServer({ 
  schema,
  context: socketContextMiddleware,
  onConnect: async (ctx) => {
    console.log('connected!', ctx.connectionParams)
  },
  onDisconnect(ctx, code, reason) {
    console.log('Disconnected!');
  },
}, wsServer);

const clientsApollo = new ApolloServer({
  schema,
  context: contextMiddleware,
  plugins: [
    // Proper shutdown for the HTTP server.
    ApolloServerPluginDrainHttpServer({ httpServer }),
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageGraphQLPlayground(),
    // Proper shutdown for the WebSocket server.
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
  formatError: 
  (error) => {
    //const errId = v4();
    return new GraphQLError(`${error.message}`, {
      path: error.path,
      extensions: {
          code: error.extensions.code,
          argumentName: error.extensions.argumentName,
      },
    });
  }
});

module.exports = clientsApollo;

