import React from 'react'
import './Sidebar.css';
import { Avatar, IconButton} from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import SidebarChat from './SidebarChat';

function Sidebar() {
    const AddNewUser = () => {
        alert("add new user");
        
    }
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://avatars.githubusercontent.com/u/36982217?s=60" />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon  onClick={AddNewUser}/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="search a chat" />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat roomId={3445} />
                <SidebarChat roomId={112223} />
            </div>
        </div>
    )
}

export default Sidebar
