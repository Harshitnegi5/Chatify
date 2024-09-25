import React from "react";
import "./Login.css";
import assets from "../../assets/assets.js";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setpassword] = useState(null);
  const [email, setemail] = useState(null);

  const navigation = useNavigate()

  const btnClick = () => {
    navigation("/profile")
  }

  const BtnRef = useRef()

  useEffect(()=>{
    
      BtnRef.current.addEventListener("submit",(e)=>{
        e.preventDefault();
      })

  },[])

  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo"/>
      <form className="login-form">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="username"
          className="form-input"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email address"
          className="form-input"
          required
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="form-input"
          required
          onChange={(e) => setpassword(e.target.value)}
        />
        <button ref={BtnRef} onClick={btnClick} type="submit" className="btn">
          Sign Up
        </button>

        <div className="login-btm">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forget">
          <p className="login-toggle">Already have an account <span>click here</span></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
