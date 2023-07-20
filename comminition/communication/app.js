import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { readFileSync } from 'fs';

import logger from './logger.js';
import messageRouter from './api/routes/messageRouter.js';
const swaggerFile = JSON.parse(readFileSync('./swagger_output.json'));

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

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

mongoose
  .connect(process.env.DB_CONNECTION, connectionParams)
  .then(() => {
    logger.info('connect to mongoDB');
  })
  .catch((error) => {
    logger.error(error.message);
  });

app.use(messageRouter);

const server = app.listen(port, () => {
  logger.info(`my app is listening on http://localhost:${port}`);
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
