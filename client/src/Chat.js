import React, { useState, useEffect } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import MoreVert from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import axios from './axios';
import { useParams } from 'react-router';
import Pusher from 'pusher-js'
import { getSavedLoginInfo, getThreadRecipent } from './utils/users'
import ScrollToBottom from 'react-scroll-to-bottom';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import Picker from 'emoji-picker-react';
import ReactEmoji from 'react-emoji';
import AttachmentIcon from '@material-ui/icons/Attachment';
import Sidebar from './Sidebar'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';




function Chat() {
   
    // const [messages, setMessage] = useState('');
    const { roomId, isgroup } = useParams();
    const User = getSavedLoginInfo()
    const [userMessage, setUserMessage] = useState('');
    const [Messages, setMessages] = useState([]);
    const [recipentName, setrecipentName] = useState('')
    const [chooseEmoji, setchooseEmoji] = useState(false);

    
    const onEmojiClick = (event, emojiObject) => {
        event.preventDefault();
        // console.log();
        setUserMessage(String(userMessage)+(emojiObject.emoji));
    };
    useEffect(() => {
        var v = document.body;
            v.className = " main__chat__body";
        
    }, [])
   

    useEffect( () => {
        axios.get(`/messages/sync?roomId=${roomId}`).then((res) => {
            console.log(res.data);
            setMessages(res.data);
        })
        if (isgroup) {
            axios.post('/findGroup',{id:roomId}).then((res)=>{
                console.log(res)
                setrecipentName(res.data)
            })
        }
    }, [roomId])

    useEffect(()=>{
        const recipent  = getThreadRecipent(roomId)
        
        if(recipent){
            setrecipentName(recipent)
        }
    },[roomId])

    const username = async (recipentId) =>{
        let username = "";
        if(isgroup){
            await axios.post('/findUser',{ uid: recipentId }).then((result)=>{
                 username = result.data.displayName;
            }).finally(()=>username)
            return username;
        }
        
    }

    useEffect(() => {

        // Enable pusher logging - don't include this in production
        // Pusher.logToConsole = true;

        const pusher = new Pusher('2142cda6d39765cba2a9', {
            cluster: 'ap2'
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', function (data) {
            // alert(JSON.stringify(data));
            if(data.threadId===roomId){
                if(data.sender!==User.uid){
                    setMessages([...Messages, data]);
                }
               
            }
        });
        return () => {
            channel.unbind_all()
            channel.unsubscribe()
        }

    }, [Messages, roomId])



    const sendMessage = async (e) => {
        e.preventDefault();
        let data = {
            threadId:roomId, 
            sender: User.uid , 
            message: userMessage, 
            timestamp: new Date().toISOString(), 
            status: 0,
          
        }
       
        setMessages([...Messages, data]);
        setUserMessage('');
        
     
        await axios.post('/messages/new', {data});
    }

   
    return (
        <div className="main__chat">
        {/* <Sidebar /> */}
        <div className="chat">
            <div className="chat__header">
                { isgroup ? 
                 <Avatar src={" "} /> :
                <Avatar src={recipentName.photoUrl || " "} />
}           
                <div className="chat__headerInfo">
                    { isgroup ? 
                    <h3>{recipentName.roomName || "Loading....."}</h3>
 :
 <h3>{recipentName.displayname || "Message not accepted"}</h3>}
                    {/* <p>Last seen at..</p> */}
                </div>
                <div className="chat__headerRight">
                   
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            {/* body */}
            {/* <div className="chat__body"> */}
                <ScrollToBottom className="chat__body" >
                    {Messages.map((message, key) => {
                      return(<p key={key} className={`chat__message ${message.sender===User.uid ? 'chat__reciever' : ''}`}>
                          <span>{ console.log(username(message.sender).then(res=>res)) }</span>
                            {ReactEmoji.emojify(message.message)}
                            <span className="chat__timestamp">
                                { new Date(message.timestamp).getFullYear() +"-"+ parseInt(new Date(message.timestamp).getUTCMonth()+1)+"-"+new Date(message.timestamp).getUTCDate()+" "+new Date(message.timestamp).toLocaleTimeString("en-US",{timeZone:"Asia/Kathmandu"}) }
                                
                                <span className="icon">
                                    {
                                        (message.sender===User.uid) ? <SubdirectoryArrowLeftIcon/> : <SubdirectoryArrowRightIcon/>
                                       
                                    }
                                    
                                </span>
                            </span>
                        </p>)
})}
                </ScrollToBottom>
            {/* </div> */}
            <div className="chat__footer">
                <IconButton onClick={()=>setchooseEmoji(!chooseEmoji)}>
                <InsertEmoticonIcon />
                </IconButton>   
                <div className="emojiBar">
                {
                    chooseEmoji &&  <Picker onEmojiClick={onEmojiClick} native />
                }
                </div>
               
                <form>
                    <input
                        placeholder="Enter message..."
                        type="text"
                        value={userMessage}
                        onChange={e => setUserMessage(e.target.value)}
                        onClick={() => setchooseEmoji(false) }
                    />
                    
                    <button type="submit" onClick={e => sendMessage(e) }>SEND</button>
                </form>
                
            </div>
        </div>
        </div>
    )
}

export default Chat
