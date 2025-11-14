import React from "react";
import UserSidebar from "./UserSidebar";
import "../styles/UserDashboard.css";

const UserDashboard = () => {
  const handleConnectWallet = () => {
    console.log("Connect Wallet clicked");
    // Add wallet connection logic here
  };

  const handleUpgrade = (type) => {
    console.log(`${type} Upgrade clicked`);
    // Add upgrade logic here
  };

  const handleBuyNft = (price) => {
    console.log(`Buy NFT for $${price} clicked`);
    // Add NFT purchase logic here
  };

  return (
    <div className="user-layout">
      <UserSidebar />

      <div className="dashboard-container">
        {/* TOP BUTTON */}
        <div className="top-wallet-btn">
          <button onClick={handleConnectWallet}>Connect Wallet</button>
        </div>

        {/* WALLET BOXES */}
        <div className="wallet-row">
          <div className="wallet-box">
            <h3>Deposit Wallet</h3>
            <p>0.00</p>
          </div>

          <div className="wallet-box">
            <h3>Withdrawal Wallet</h3>
            <p>0.00</p>
          </div>

          <div className="wallet-box">
            <h3>Staking Wallet</h3>
            <p>10000</p>
            <button
              className="upgrade-btn"
              onClick={() => handleUpgrade("Staking")}
            >
              UPGRADE
            </button>
          </div>
        </div>

        {/* INCOME SECTION */}
        <div className="income-row">
          <div className="income-box">
            <p>Activation income : 10</p>
            <p>Activation level income : 30</p>
            <p>Trade income : 200</p>
            <p>Trade level income : 100</p>
            <p>Package staking income : 53</p>
            <p>Autofull income : 72</p>
            <p>Referral coin income : 400</p>
            <p>Dally coin collect income : 36</p>
          </div>

          <div className="income-box">
            <p>Direct referral : 10</p>
            <p>Total Downline : 70</p>
            <p>Total coin downline staking : 210</p>
          </div>

          <div className="referral-box">
            <h4>Referral link</h4>
            <input type="text" value="https://example.com/ref=123" readOnly />

            <div className="ref-upgrade">
              <p>Active Package</p>
              <button onClick={() => handleUpgrade("Active Package")}>
                UPGRADE
              </button>
            </div>

            <div className="ref-upgrade">
              <p>Staking Package Upper</p>
              <button onClick={() => handleUpgrade("Staking Package Upper")}>
                UPGRADE
              </button>
            </div>
          </div>
        </div>

        {/* PACKAGE UPGRADE BUTTONS */}
        <div className="pkg-buttons">
          <button onClick={() => handleUpgrade("$25")}>$25 UPGRADE</button>
          <button onClick={() => handleUpgrade("$50")}>$50 UPGRADE</button>
          <button>REMAINING TRADE LIMIT: 263.75$</button>
          <button>03:50:00 (24 HOURS)</button>
        </div>

        {/* NFT CARDS */}
        <div className="nft-row">
          {[10, 15, 22.5, 33.75, 50, 20].map((price, i) => (
            <div className="nft-card" key={i}>
              <img src="https://i.imgur.com/FcJbM8Z.png" alt="nft" />
              <h3>Dragon NFT</h3>
              <p>${price}</p>
              <button onClick={() => handleBuyNft(price)}>Buy</button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default UserDashboard;
