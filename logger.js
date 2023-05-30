const pino = require('pino');
const multistream = require('pino-multi-stream');
const fs = require('fs');

const logFilePath = `${__dirname}/app.log`;


if (!fs.existsSync(logFilePath)) {
  fs.writeFileSync(logFilePath, '');
}

const fileTransport = pino.transport({
    target: 'pino/file',
    options: {
      destination: 'app.log'
    }
  });

const logger = pino({
  level: process.env.PINO_LOG_LEVEL || 'info',
  formatters: {
    bindings: (bindings) => {
      return {
        pid: bindings.pid,
        host: bindings.hostname,
        node_version: process.version,
      };
    },
    level: (label) => {
      return {
        level: label.toUpperCase()
      };
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  streams: [
    { stream: process.stdout },
    { stream: multistream([ fileTransport ]) }
  ]
});

module.exports = logger;



const logFilePatht = `${__dirname}/app.log`;

fs.stat(logFilePatht, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  
});