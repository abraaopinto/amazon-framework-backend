var appRoot = require('app-root-path');
var winston = require('winston');

// define the custom settings for each transport (file, console)
const options = {
    file: {
      level: 'debug',
      filename: `${appRoot}/logs/${process.env.npm_package_name || 'app'}.log`,
      handleExceptions: false,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false,
    },
    console: {
      level: 'info',
      handleExceptions: false,
      json: false,
      colorize: false,
    },
    fileError:{
      level: 'error',
      filename: `${appRoot}/logs/${process.env.npm_package_name+'Error' || 'appErro'}.log`,
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false,
      humanReadableUnhandledException: true
    }
  };

  // instantiate a new Winston Logger with the settings defined above
  var logger = winston.createLogger({
    transports: [
      new (winston.transports.Console)(options.console),
      new (winston.transports.File)(options.file),
      new (winston.transports.File)(options.fileError)
    ],
    exitOnError: false, // do not exit on handled exceptions
  });

  logger.stream = {
    write: function(message, encoding) {
      // use the 'info' log level so the output will be picked up by both transports (file and console)
      logger.info(message);
    },
  };

  module.exports = logger;