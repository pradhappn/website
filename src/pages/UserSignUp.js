import React from "react";
import "../styles/UserSignUp.css";
import logo from "../assets/logo.png";

const UserSignUp = () => {
  return (
    <div className="signup-page">
      <div className="signup-card">
        <img src={logo} className="signup-logo" alt="logo" />

        <h1 className="title">DeFiDroganNFT</h1>
        <h2 className="subtitle">Sign Up</h2>

        <input type="text" placeholder="https://example.com/ref=123" />

        <label>Name</label>
        <input type="text" placeholder="Email" />

        <label>Password</label>
        <input type="password" placeholder="Password" />

        <label>Confirm Password</label>
        <input type="password" placeholder="Password" />

        <button className="signup-btn">Sign Up</button>

        <p className="login-link">
          Already have an account? <a href="/signin">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
