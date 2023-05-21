const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const cors = require('cors')

const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()
const port = 3000

dotenv.config()
app.use(cors);

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB_CONNECTION, connectionParams)
    .then(() => {
        console.log('connect to mongoDB');
    })
    .catch((error) => {
        console.log(error.message);
    })
app.use(bodyParser.json())

app.use(morgan('dev'))


const messageRouter = require('./routes/messageRouter')
app.use('/messages', messageRouter)

app.listen(port, () => {
    console.log(`my app is listening on http://localhost:${port}`);
})