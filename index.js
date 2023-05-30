
const logger = require('./logger');
logger.error('error');
logger.info('starting the program');

function getUser(userID) {
  const childLogger = logger.child({ userID });
  childLogger.trace('getUser called');
  
  childLogger.trace('getUser completed');
}

getUser('johndoe');

logger.info('ending the program');

process.on('uncaughtException', (err) => {
  
    logger.fatal(err, 'uncaught exception detected');
   
    server.close(() => {
      process.exit(1); 
    });
  
    
    setTimeout(() => {
      process.abort(); 
    }, 1000).unref()
    process.exit(1);
  });