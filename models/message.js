const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    userCode: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  });
const Message = mongoose.model('Message', messageSchema);

module.exports = Message;