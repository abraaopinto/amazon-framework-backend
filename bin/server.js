const app = require('../src/app');
const http = require('http');

// server
const server = http.createServer(app);

server.listen(process.env.PORT || 8080);
console.log('A API está ativa em 8080 '+process.env.PORT);