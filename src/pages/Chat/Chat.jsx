import React from 'react'
import "./Chat.css"
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import Chatbox from '../../components/Chatbox/Chatbox'
import RightSideBar from '../../components/RightSideBar/RightSideBar'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
        <LeftSideBar/>
        <Chatbox/>
        <RightSideBar/>
      </div>
    </div>
  )
}

export default Chat
