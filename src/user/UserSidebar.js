import React from "react";
import "../styles/UserSidebar.css";
import { useNavigate } from "react-router-dom";

const items = [
  "Dashboard",
  "Profile",
  "Registration",
  "Staking",
  "Deposit",
  "Team",
  "History",
  "Withdrawal",
  "Report",
  "Transfer",
  "Support",
];

const UserSidebar = () => {
  const navigate = useNavigate();

  const handleNavigate = (item) => {
    const path = item.toLowerCase();
    switch (path) {
      case "dashboard":
        navigate("/user/UserDashboard");
        break;
      case "profile":
        navigate("/user/profile");
        break;
      default:
        console.log(`Navigate to ${item}`);
    }
  };
  return (
    <div className="user-sidebar">
      {items.map((item, index) => (
        <button key={index} onClick={() => handleNavigate(item)}>{item}</button>
      ))}
    </div>
  );
};

export default UserSidebar;
