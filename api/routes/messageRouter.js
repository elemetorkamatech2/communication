const router = require('express').Router();
const {
  getAll,
  createMessage,
  Delete,
} = require('../controllers/messageController');

router.get('/message', getAll);
router.post('/message', createMessage);
router.delete('/message/:id', Delete);

module.exports = router;
