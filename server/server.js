//importing
import express from 'express'
import mongoose from "mongoose"
const app = express()
import Messages from './Models/dbMessages.js';
import Users from './Models/Users.js';
import Pusher from 'pusher'
import cors from 'cors'
import Rooms from './Models/Rooms.js';
import Groups from './Models/Group.js';
import multer from 'multer'
const upload = multer({ dest: 'uploads/' });
// import  ObjectId from 'mongodb';
import pkg from 'mongodb';
const { ObjectId } = pkg;
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
                sender:details.sender,
                message:details.message,
                timestamp:details.timestamp,
                status:0,
                threadId:details.threadId
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



app.post('/messages/new', (req,res)=>{
    const dbMessage = req.body.data;
//    console.log(dbMessage);
    Messages.create(dbMessage, (err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    }) 
    
})

app.post('/createUser', (req,res)=>{
    const data = req.body
    Users.create(data, (err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
    // console.log(data)
})

app.get('/messages/sync', (req,res)=>{
    
    Messages.find({threadId:req.query.roomId},(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    }) 
    
})

app.post('/findUser', (req,res)=>{
    const email = req.body;
    // console.log(email);
    Users.find(email,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            if(data[0]){
            const newData = {
                displayName:data[0].displayName,
                uid: data[0].uid,
                photoUrl:data[0].photoUrl,
                email:data[0].email,
                phone:data[0].phone,
                status:true,
            }
            // console.log(data);
            res.status(200).send(newData)
        }else{
            res.status(200).send({status: false})
        }
        }
    }) 
    
})

app.post('/createNewRoom', (req,res)=>{
    // console.log(req.body);
    const data = {
        user1: req.body.user1,
        user2: req.body.user2,
        consent:{
            user1:true,
            user2:false,
        },
        createdOn: Date.now()
    }
    
    // console.log(data);
    Rooms.create(data,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    }) 
    
})

app.post('/getAllrooms', (req,res)=>{
    const id = req.body.id;
    // console.log(req);
    Rooms.find({ $or:[{ user1: id},{user2: id}]},(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            // console.log(data);

            res.status(200).send(data)
        }
    }) 
    
})


app.post('/createNewGroup', (req,res)=>{
    // console.log(req.body);
    const data = {
       roomName: req.body.roomName,
       members: req.body.members,
        createdOn: Date.now()
    }
    
    // console.log(data);
    Groups.create(data,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    }) 
    
})

app.post('/getAllgroups', (req,res)=>{
    const id = req.body.id;
    // console.log(id);
    Groups.find({ members: id},(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            // console.log(data);

            res.status(200).send(data)
        }
    }) 
    
})


app.post('/findGroup', (req,res)=>{
    const _id = req.body.id;
    // console.log(_id);
    Groups.findOne({"_id":  ObjectId(_id)},(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            if(data){
           
            // console.log(data);
            res.status(200).send(data)
        }
        }
    }) 
    
})













//middleware


app.listen(port, ()=>{
    console.log("Runnig on port",port);
})