const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
const logger = require('./logger');
const messageRouter = require('./api/routes/messageRouter');

// const open =require('open')
// const Message = require("./models/message");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(morgan('dev'));
dotenv.config();
app.use(cors());

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(messageRouter);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

mongoose
  .connect(process.env.DB_CONNECTION, connectionParams)
  .then(() => {
    logger.info('connect to mongoDB');
  })
  .catch((error) => {
    logger.error(error.message);
  });

const server = app.listen(port, () => {
  logger.info(`my app is listening on http://localhost:${port}`);
  // open('http://localhost:3000/doc');
});
process.on('uncaughtException', (err) => {
  logger.fatal(err, 'uncaught exception detected');
  server.close(() => {
    process.exit(1);
  });
  setTimeout(() => {
    process.abort();
  }, 1000).unref();
  process.exit(1);
});
