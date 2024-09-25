import React from 'react'
import "./RightSideBar.css"
import assets from "../../assets/assets";
const RightSideBar = () => {
  return (
    <div className='rs'>
      <div className="rs-profile">
        <img src={assets.profile_img} alt="" />
        <h3>Harshit Negi <img src={assets.green_dot} className='dot' alt="" /></h3>
        <p>Hey, There is a harshit negi using chat app.</p>
      </div>
      <hr />
      <div className='rs-media'>
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic5} alt="" />
          <img src={assets.pic6} alt="" />
        </div>
        <button>Logout</button>
      </div>
      
    </div>
  )
}

export default RightSideBar
