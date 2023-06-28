import express from 'express';

import controller from '../controllers/messageController.js';

const router = express.Router();

router.get('/message', controller.getAll);
router.delete('/message/:id', controller.deleteMessage);
router.post('/message', controller.createMessage);

export default router;
