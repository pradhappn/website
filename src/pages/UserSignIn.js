// src/user/UserSignIn.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UserSignIn.css";
import logo from "../assets/logo.png";

const UserSignIn = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim().toLowerCase();
    const password = form.password.value;

    const stored = JSON.parse(localStorage.getItem("userData"));
    if (!stored) {
      alert("No registered user found. Please sign up first.");
      return;
    }

    if (stored.email === email && stored.password === password) {
      // mark logged-in (simple demo)
      localStorage.setItem("loggedInUser", JSON.stringify(stored));
      console.log("Login OK:", stored);
      navigate("/user/profile");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <img src={logo} className="signin-logo" alt="logo" />
        <h1 className="title">Sign in</h1>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input type="email" name="email" placeholder="you@example.com" required />

          <label>Password</label>
          <input type="password" name="password" placeholder="Password" required />

          <button type="submit" className="signin-btn">Sign in</button>
        </form>

        <div style={{marginTop:12}}>
          <button className="metamask-btn" onClick={() => alert("MetaMask demo")}>🦊 Connect with MetaMask</button>
        </div>
      </div>
    </div>
  );
};

export default UserSignIn;
