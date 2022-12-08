/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
require('app-module-path').addPath(__dirname);
const app = require('apolloServer/app');
const httpServer = require('apolloServer/httpServer');
const apollo = require('apolloServer/apollo');
require('dotenv').config()

async function server() {


  const port = process.env.PORT || 4534;

  await apollo.start();
  apollo.applyMiddleware({app , path: '/api'});

  httpServer.listen(port, () => console.log(`server running on port ${port}`))
}

server();

