const express = require('express')

const router = express.Router()

const {
    getAll, createMessage
}=require('../controllers/messageController')

router.get('/',getAll)
router.post('/createMessage', createMessage)
module.exports=router