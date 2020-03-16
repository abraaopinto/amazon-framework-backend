const express = require('express');
const bodyParser = require('body-parser');
var config = require('config');

const morgan = require('morgan');
var logger = require('winston');
const routers = require('../routes/index');



module.exports = () => {
    const app = express();

    app.disable('x-powered-by');
    app.use(function (req, res, next) {
        res.removeHeader("X-Powered-By");
        next();
      });

    // SETANDO VARIÁVEIS DA APLICAÇÃO
    app.set('port', process.env.PORT || 8080);

    // MIDDLEWARES
    app.use(bodyParser.json());
    app.use(morgan('combined', { stream: logger.stream }));
    app.use(routers);

    return app;
};