var Message = require('../models/message.js'); 

module.exports={
    getAll:(req,res)=>{
        Message.find()
        .then(messages=>{
            res.status(200).send(messages)
        })
        .catch(error=>{
            res.status(404).send({error:error.message})
        })
    }
}