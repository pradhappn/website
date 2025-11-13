import React from "react";
import "../styles/sidebar.css";

const sidebarItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "trade", label: "Trade History" },
  { id: "nft", label: "Gragon NFT" },
  { id: "deposite", label: "Deposite" },
  { id: "report", label: "Report" },
  { id: "network", label: "Network" },
  { id: "withdraw", label: "Withdrawal" },
  { id: "team", label: "Team" },
  { id: "content", label: "Content" },
  { id: "support", label: "Support" },
  { id: "settings", label: "Settings" },
  { id: "logout", label: "Logout" },
];

const Sidebar = ({ currentPage, onSelect }) => {
  return (
    <div className="sidebar">
      {sidebarItems.map((item) => (
        <button
          key={item.id}
          className={currentPage === item.id ? "active" : ""}
          onClick={() => onSelect(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
