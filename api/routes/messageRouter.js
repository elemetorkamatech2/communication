const express = require('express');
const {
  getAll,
  createMessage,
  Delete,
} = require('../controllers/messageController');

const router = express.Router();

router.get('/', getAll);
router.post('/', createMessage);
router.delete('/:id', Delete);

module.exports = router;
