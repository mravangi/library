/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
require('app-module-path').addPath(__dirname);
const path = require('path');
const cors = require("cors");
const express = require('express');
const routes = require('routes');
const bodyParser = require('body-parser');
const graphqlUploadExpress = require('graphql-upload/graphqlUploadExpress.js');

  const app = express(); //4534

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({}));
  app.set('trust proxy', 2)

  var whitelist = [
    'http://localhost:3000', 
    'https://example.com'
  ];

  var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
  }

  app.use(cors(corsOptionsDelegate));
  // app.use(useragent.express());

  // app.use('/static', express.static(path.join(__dirname, 'public')));
  app.use('/static', express.static(path.join(__dirname, '../public')))
  app.use('/', routes);
  app.get('/ip', (request, response) => response.send(request.ip))
  app.set('view engine', 'html');
  app.use(graphqlUploadExpress());

  module.exports = app;
