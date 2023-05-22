const express = require('express')

const router = express.Router()

const {
    getAll,
    Delete
}=require('../controllers/messageController')

router.get('/',getAll)
router.delete('/:messageId',Delete)
module.exports=router