const express = require('express')

const router = express.Router()

const {
    getAll,
    createMessage,
    Delete
} = require('../controllers/messageController')

module.exports = function (router) {
    router.get('/', getAll)
    router.post('/', createMessage)
    router.delete('/:id', Delete)
}
