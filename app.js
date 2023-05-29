const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const port = 3000;

const messageRouter = require("./routes/messageRouter");
const Message = require("./models/message");

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

dotenv.config();
app.use(cors());


const http = require('http');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
app.use('/doc',swaggerUi.serve,swaggerUi.setup(swaggerFile));
require('./routes/messageRouter')(app);
/*
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
*/
// const open =require('open')


// Require and call the Swagger setup function
// require('./swagger')(app)

mongoose
    .connect(process.env.DB_CONNECTION, connectionParams)
    .then(() => {
        console.log("connect to mongoDB");
    })
    .catch((error) => {
        console.log(error.message);
    });
app.use(bodyParser.json());

app.use(morgan("dev"));

app.use("/messages", messageRouter);

// Start the server
app.listen(port, () => {
    console.log(`my app is listening on http://localhost:${port}`);
    // open('http://localhost:3000/api-docs');
});
