const app = require('../src/app');
const http = require('http');
const port = process.env.PORT || 8080;
// server
const server = http.createServer(app);

server.listen(port);

logger.debug(`A API está ativa em ${ port }!`);