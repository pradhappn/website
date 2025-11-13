import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import logo from "../assets/logo.png";   // your dragon logo

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-bg">
      <div className="top-bar">

        {/* LEFT SIDE BUTTON */}
        <button className="btn admin-btn" onClick={() => navigate("/admin")}>
          ADMIN LOGIN
        </button>

        {/* RIGHT SIDE BUTTONS */}
        <div className="right-buttons">
          <button className="btn sign-btn" onClick={() => navigate("/signin")}>
            SIGN IN
          </button>
          <button className="btn signup-btn" onClick={() => navigate("/signup")}>
            SIGN UP
          </button>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
