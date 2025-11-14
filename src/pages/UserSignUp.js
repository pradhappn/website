// src/user/UserSignUp.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UserSignUp.css";
import logo from "../assets/logo.png";

const UserSignUp = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim().toLowerCase();
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (!name || !email || !password) {
      alert("Please fill all required fields.");
      return;
    }
    if (password !== confirm) {
      alert("Passwords do not match.");
      return;
    }

    // Save user data (overwrite any existing for demo)
    const user = { name, email, password };
    localStorage.setItem("userData", JSON.stringify(user));
    console.log("Saved user:", user);

    // Navigate to signin page
    navigate("/signin");
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <img src={logo} className="signup-logo" alt="logo" />
        <h1 className="title">DeFiDroganNFT</h1>
        <h2 className="subtitle">Sign Up</h2>

        <form onSubmit={handleSignup} className="signup-form">
          <input type="text" name="ref" placeholder="Referral (optional)" />

          <label>Name</label>
          <input type="text" name="name" placeholder="Your Name" required />

          <label>Email</label>
          <input type="email" name="email" placeholder="email@example.com" required />

          <label>Password</label>
          <input type="password" name="password" placeholder="Password" required />

          <label>Confirm Password</label>
          <input type="password" name="confirm" placeholder="Confirm Password" required />

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p className="login-link">
          Already have an account?{" "}
          <span className="link-btn" onClick={() => navigate("/signin")} style={{color:'#0d63d6',cursor:'pointer'}}>Log in</span>
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
