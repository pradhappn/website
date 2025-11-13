import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("Stake");
  const [password, setPassword] = useState("stake@123");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // In a real application, you would send these credentials to a backend for authentication.
    // For now, we'll use the hardcoded values.
    if (username === "Stake" && password === "stake@123") {
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials"); // Basic error handling
    }
  };
  return (
    <div className="admin-page">
      <div className="login-card">
        <h1 className="title">DeFiDroganNFT</h1>
        <h2 className="subtitle">Admin</h2>

        <label>Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} required />

        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <div className="remember-row">
          <input type="checkbox" />
          <label>Remember me</label>
        </div>

        <button className="login-btn" onClick={handleSubmit}>Log In</button>
        <div className="forgot">Forgot your password?</div>
      </div>
    </div>
  );
};

export default AdminLogin;
