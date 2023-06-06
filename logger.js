const pino = require('pino');
// const multistream = require('pino-multi-stream');
// const fs = require('fs');
// const pinoColada = require('pino-colada');
// const { colorize } = require('colorize');
// const winston = require('winston');
// const chalk = require('chalk');

// const logger = winston.createLogger({
//   level: 'error',
//   transports: [
//     new winston.transports.File({ filename: 'app.log' }),
//   ],
// });

const fileTransports = pino.transport({
  target: 'pino/file',
  options: { destination: `${__dirname}/app.log` },
});

module.exports = pino(
  {
    level: process.env.PINO_LOG_LEVEL || 'info',
    formatters: {
      level: (label) => ({ level: label.toUpperCase() }),
    },
    timestamp: pino.stdTimeFunctions.isoTime,
  },
  fileTransports,
);
