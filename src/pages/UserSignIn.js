import React from "react";
import "../styles/UserSignIn.css";
// import logo from "../assets/logo.png";

import { Link } from "react-router-dom";
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

        <Link to="/forgot-password" className="forgot">
          Forgot password?
        </Link>

        <button className="signin-btn">Sign in</button>
      </div>
    </div>
  );
};

export default UserSignIn;
