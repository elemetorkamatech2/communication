const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const logger = require('./logger');
logger.error('hi')
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const port = 3000;

dotenv.config();

app.use(cors());


require('./swagger')(app);

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

logger.info(process.env.DB_CONNECTION)

mongoose
  .connect(process.env.DB_CONNECTION, connectionParams)
  .then(() => {
    logger.info("connect to mongoDB");
  })
  .catch((error) => {
    logger.error(error.message);
  });

app.use(bodyParser.json());

app.use(morgan("dev"));

const messageRouter = require("./routes/messageRouter");
const Message = require("./models/message");
app.use("/messages", messageRouter);


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


const server = app.listen(port, () => {
  logger.info(`my app is listening on http://localhost:${port}`);
});

