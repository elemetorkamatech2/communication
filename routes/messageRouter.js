const express = require('express')

const router = express.Router()

const {
    getAll,
    createMessage,
    Delete
}=require('../controllers/messageController')

router.get('/',getAll)
router.post('/createMessage', createMessage)
router.delete('/:messageId',Delete)
module.exports=router
