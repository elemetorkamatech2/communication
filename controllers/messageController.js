const Message = require('../models/message.js');

module.exports = {
	getAll: (req, res) => {
		Message.find()
			.then((messages) => {
				res.status(200).send(messages);
			})
			.catch((error) => {
				res.status(404).send({ error: error.message });
			});
	},
	Delete: (req, res) => {
		Message.findById(req.params.id)
			.then((message) => {
				console.log(req.params.id);
				console.log(message);
				if (!message) {
					res.status(400).send({ message: 'Message doesn\'t found' });
				}
				Message.deleteOne({ _id: req.params.id })
					.then(() => {
						res.status(200).send({ message: 'The message with id:${req.params.id} has been deleted' });
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
		try {
			const message = new Message(req.body);
			await message.save();
			res.status(200).send({ message });
		} catch (error) {
			res.status(400).send({ message: error.message });
		}
	},
};
