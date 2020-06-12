// eslint-disable-next-line import/newline-after-import
const winston = require('winston');
const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      json: true,
      colorize: true
    })
  ]
});
module.exports = logger;
