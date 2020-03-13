const express = require('express');
const routers = require('./routes/index');
const morgan = require('morgan');
var logger = require('./config/winston');

const app = express();
app.use(morgan('combined', { stream: logger.stream }));
app.use(routers);

module.exports = app, logger;