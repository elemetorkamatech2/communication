import Message from '../models/message.js';

export default {
  getAll: (req, res) => {
    /*
    #swagger.tags=['message']
    */
    Message.find()
      .then((messages) => {
        res.status(200).send(messages);
      })
      .catch((error) => {
        res.status(404).send({ error: error.message });
      });
  },
  deleteMessage: (req, res) => {
    /*
      #swagger.tags=['message']
    */
    Message.findById(req.params.id)
      .then((message) => {
        if (!message) {
          res.status(400).send({ message: 'Message doesn\'t found' });
        }
        Message.deleteOne({ _id: req.params.id })
          .then(() => {
            res.status(200).send({ message: `The message with id:${req.params.id} has been deleted` });
          })
          .catch((error) => {
            res.status(404).send({ error: error.message });
          });
      })
      .catch((error) => {
        res.status(404).send({ error: error.message });
      });
  },
  createMessage: async (req, res) => {
    /*
      #swagger.tags=['message']
    */
    /*
      #swagger.parameters['message'] = {
           in: 'body',
                required: true,
            schema: { $ref: "#/definitions/addMessage" }
        }
    */
    try {
      const message = new Message(req.body);
      await message.save();
      res.status(200).send({ newMessage: message });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
};
