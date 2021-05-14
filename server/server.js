//importing
import express from 'express'
import mongoose from "mongoose"
const app = express()
import Messages from './Models/dbMessages.js';
import Pusher from 'pusher'
import cors from 'cors'
const port = process.env.PORT || 9000

app.use(express.json());

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Headers","*")
    next();
})
app.use(cors())


//app config


const uri = "mongodb+srv://Sudeep:gPwrt6hx1BtcJo9J@cluster0.0waam.gcp.mongodb.net/eureka?retryWrites=true&w=majority";
mongoose.connect(uri,{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})


//app route

app.get('/',(req,res)=> res.status(200).send("Hello from backend"));

const db = mongoose.connection
db.once('open',()=>{
    console.log('db is connected');
    const messages = db.collection('messages')
    const changeStream = messages.watch()
    changeStream.on('change',(change)=>{
        // console.log(change);
        if(change.operationType==='insert'){
            const details = change.fullDocument;
            pusher.trigger('messages','inserted',{
                name:details.name,
                message:details.message,
                timestamp:details.timestamp
            });
        }else{
            console.log('error on pusher');
        }
    })
})

const pusher = new Pusher({
  appId: "1202226",
  key: "2142cda6d39765cba2a9",
  secret: "93c2b88777c4c5d29975",
  cluster: "ap2",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});



app.post('/messages/new', (req,res)=>{
    const dbMessage = req.body
    Messages.create(dbMessage, (err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    }) 
    
})


app.get('/messages/sync', (req,res)=>{
    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    }) 
    
})

//middleware


app.listen(port, ()=>{
    console.log("Runnig on port",port);
})