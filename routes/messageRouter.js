const express = require('express')

const router = express.Router()

const {
    getAll
}=require('../controllers/messageController')

router.get('/',getAll)
module.exports=router