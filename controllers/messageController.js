var Message = require('../models/message.js');
const logger = require('../logger');
module.exports = {
    getAll: (req, res) => {
        Message.find()
            .then(messages => {
                logger.info(`Retrieved all messages from the database`);
                res.status(200).send(messages);
            })
            .catch(error => {
                logger.error(`Error retrieving messages: ${error.message}`);
                res.status(404).send({ error: error.message });
            });
    },
    Delete: (req, res) => {
        Message.findById(req.params.id)
            .then(message => {
                logger.info(`Retrieved message with id ${req.params.id} from the database`);
                if (!message) {
                    logger.warn(`Message with id ${req.params.id} not found`);
                    res.status(400).send({ message: "Message doesn't found" });
                }
                Message.deleteOne({ _id: req.params.id })
                    .then(() => {
                        logger.info(`Deleted message with id ${req.params.id} from the database`);
                        res.status(200).send({ message: `The message with id:${req.params.id} has been deleted` });
                    })
                    .catch(error => {
                        logger.error(`Error deleting message with id ${req.params.id}: ${error.message}`);
                        res.status(404).send({ error: error.message });
                    })
            })
            .catch(error => {
                logger.error(`Error retrieving message with id ${req.params.id}: ${error.message}`);
                res.status(404).send({ error: error.message });
            })
    },
    createMessage: async (req, res) => {
        try {
            let message = new Message(req.body);
            await message.save();
            logger.info(`Created new message with id ${message._id}`);
            res.status(200).send({ message: message });
        }
        catch (error) {
            logger.error(`Error creating new message: ${error.message}`);
            res.status(400).send({ message: error.message });
        }
    }
}