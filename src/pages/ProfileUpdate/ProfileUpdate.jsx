import React from "react";
import "./ProfileUpdate.css";
import assets from "../../assets/assets.js";
import { useState } from "react";

const ProfileUpdate = () => {
  const [image, setimage] = useState(false);

  return (
    <div className="profile">
      <div className="profile-container">
        <form>
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input
              onChange={(e) => setimage(e.target.files[0])}
              type="file"
              id="avatar"
              accept=".png , .jpeg, .jpg"
              hidden
            />
            <img
              src={image ? URL.createObjectURL(image) : assets.avatar_icon}
              alt=""
            />
            upload your image
          </label>
          <input type="text" placeholder="Your name" />
          <textarea placeholder="Write Profile Bio"></textarea>
          <button type="submit">Save</button>
        </form>
        <img src={image ? URL.createObjectURL(image) : assets.logo_icon} className="profile-pic" alt="" />
      </div>
    </div>
  );
};

export default ProfileUpdate;
