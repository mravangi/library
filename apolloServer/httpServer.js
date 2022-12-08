
const { createServer } = require("http");

const app = require('./app');
const httpServer = createServer(app);

module.exports = httpServer;

