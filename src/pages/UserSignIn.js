import React from "react";
import "../styles/UserSignIn.css";
import logo from "../assets/logo.png";

const UserSignIn = () => {
  return (
    <div className="signin-page">

      <div className="signin-card">
        <img src={logo} className="signin-logo" alt="logo" />

        <h1 className="title">Sign in</h1>

        <button className="metamask-btn">
          🦊 Connect with MetaMask
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <label>Email</label>
        <input type="email" placeholder="you@example.com" />

        <label>Password</label>
        <input type="password" placeholder="Password" />

        <a className="forgot">Forgot password?</a>

        <button className="signin-btn">Sign in</button>
      </div>
    </div>
  );
};

export default UserSignIn;
