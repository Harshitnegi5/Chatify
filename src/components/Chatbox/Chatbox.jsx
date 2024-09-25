import React from 'react'
import "./Chatbox.css"
import assets from '../../assets/assets'
const Chatbox = () => {
  return (
    <div className='chat-box'>
        <div className="chat-user">
            <img src={assets.profile_img} alt="" />
            <p>Harshit Negi <img className='dot' src={assets.green_dot} alt="" /></p>
            <img src={assets.help_icon} className='help' alt="" />
        </div>

        <div className="chat-msg">
            <div className="s-msg">
                <p className="msg">lorem ipsum is a placeholder text commonly used in ..</p>
                <div>
                    <img src={assets.profile_img} alt="" />
                    <p>2:30 PM</p>
                </div>
            </div>
            <div className="r-msg">
                <p className="msg">lorem ipsum is a placeholder text commonly used in ..</p>
                <div>
                    <img src={assets.profile_img} alt="" />
                    <p>2:30 PM</p>
                </div>
            </div>
        </div>

        <div className="chat-input">
            <input type="text" placeholder='Send a message' />
            <input type="file"  accept='image/png, image/jpeg' hidden id="image" />
            <label htmlFor="image">
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.send_button} alt="" />
            </label>
        </div>
      
    </div>
  )
}

export default Chatbox
