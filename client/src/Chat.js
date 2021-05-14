import React, { useState, useEffect } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import AttachFile from '@material-ui/icons/AttachFile'
import MoreVert from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import axios from './axios';
import { useParams } from 'react-router';
import Pusher from 'pusher-js'


function Chat() {

    // const [messages, setMessage] = useState('');
    const { roomId } = useParams();

    const [userMessage, setUserMessage] = useState('');
    const [Messages, setMessages] = useState([])

    useEffect(() => {
        axios.get('/messages/sync').then((res) => {
            console.log(res.data);
            setMessages(res.data);
        })
    }, [])

    useEffect(() => {

        // Enable pusher logging - don't include this in production
        Pusher.logToConsole = true;

        const pusher = new Pusher('2142cda6d39765cba2a9', {
            cluster: 'ap2'
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', function (data) {
            // alert(JSON.stringify(data));
            setMessages([...Messages, data]);
        });
        return () => {
            channel.unbind_all()
            channel.unsubscribe()
        }

    }, [Messages])



    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post('/messages/new', { name: "sudeep", message: userMessage, timestamp: new Date().toISOString(), recieved: false });
        setUserMessage('');
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at..</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            {/* body */}
            <div className="chat__body">
                {Messages.map((message) => (
                    <p className={`chat__message ${message.recieved ? '' : 'chat__reciever'}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">
                            {message.timestamp}
                        </span>
                    </p>
                ))}



            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input
                        placeholder="Enter message..."
                        type="text"
                        value={userMessage}
                        onChange={e => setUserMessage(e.target.value)}
                    />
                    <button type="submit" onClick={e => sendMessage(e) }>SEND</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
