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
    },
    createMessage:async(req, res)=>{
        try{
        let message = new Message(req.body);
        await message.save();
        res.status(200).send({message: message});
        }
        catch(error){
            res.status(400).send({message: error.message});
        }
    }
}