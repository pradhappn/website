import React from "react";
import "./Home.css";

const Dashboard = () => {
  return (
    <div className="page-container">
      <div className="top-bar">

        <button className="btn admin-btn">ADMIN LOGIN</button>

        <div className="right-buttons">
          <button className="btn sign-btn">SIGN IN</button>
          <button className="btn signup-btn">SIGN UP</button>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
