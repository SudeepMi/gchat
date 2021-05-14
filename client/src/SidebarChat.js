import React from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core'
import { Link, BrowserRouter as Router } from 'react-router-dom'

function SidebarChat({roomId}) {
    return (
        <Router>
        <Link to={`/threads/${roomId}`}>
            <div className="SidebarChat">
            <Avatar />
            <div className="SidebarChat__info">
                <h2>Room name</h2>
                <p>The last message</p>
            </div>
        </div>
        </Link>
        </Router>
    )
}

export default SidebarChat
