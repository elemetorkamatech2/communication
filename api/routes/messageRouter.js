const {
  getAll,
  createMessage,
  Delete,
} = require('../controllers/messageController');

// eslint-disable-next-line func-names
module.exports = function (router) {
  router.get('/', getAll);
  router.post('/', createMessage);
  router.delete('/:id', Delete);
};
