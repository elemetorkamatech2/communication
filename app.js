var express=require('express')
var app=express()


const messageRouter=require('./routes/messageRouter')

app.use('/messages',messageRouter)

app.listen(5000, ()=> {
    console.log("server runing in port 5000")
})