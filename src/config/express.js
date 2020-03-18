const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const morgan = require('morgan');
const logger = require('../config/winston');
const helmet = require('helmet');

// Default routes
const routers = require('../routes/index');

module.exports = () => {
    var app = express();

    app.use(helmet());

    app.disable('x-powered-by');   

    // SETANDO VARIÁVEIS DA APLICAÇÃO
    app.set('port', process.env.PORT || config.get('server.port'));

    // MIDDLEWARES
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(morgan('combined', { stream: logger.stream }));
    app.use(routers);

    return app;
};