import React, { useState } from "react";
import UserSidebar from "./UserSidebar";
import "../styles/UserProfile.css";

const UserProfile = () => {
  // Load saved user data
  const stored =
    JSON.parse(localStorage.getItem("loggedInUser")) ||
    JSON.parse(localStorage.getItem("userData"));

  const [user, setUser] = useState(
    stored || { name: "", email: "", phone: "", address: "", country: "", state: "" }
  );

  const [isEditing, setIsEditing] = useState(false);
  const [passwordMode, setPasswordMode] = useState(false);

  const [passwordData, setPasswordData] = useState({
    current: "",
    newPass: "",
    confirmPass: "",
  });

  const handleSaveProfile = () => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    localStorage.setItem("userData", JSON.stringify(user));
    alert("Profile updated successfully!");
    setIsEditing(false);
  };

  const handlePasswordChange = () => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (passwordData.current !== storedUser.password) {
      alert("Current password is wrong");
      return;
    }

    if (passwordData.newPass !== passwordData.confirmPass) {
      alert("New passwords do not match");
      return;
    }

    // Update user password
    storedUser.password = passwordData.newPass;
    localStorage.setItem("userData", JSON.stringify(storedUser));
    localStorage.setItem("loggedInUser", JSON.stringify(storedUser));

    alert("Password updated!");
    setPasswordMode(false);

    // Reset form
    setPasswordData({ current: "", newPass: "", confirmPass: "" });
  };

  return (
    <div className="user-layout">
      <UserSidebar />

      <div className="profile-container">
        {/* HEADER */}
        <div className="top-header">
          <h1>DeFiDrogan NFT</h1>
          <button className="wallet-btn">Connect Wallet</button>
        </div>

        {/* PROFILE CONTENT */}
        <div className="profile-content">
          {/* LEFT BOX */}
          <div className="left-box">
            <img
              src="https://i.imgur.com/FcJbM8Z.png"
              alt="User Avatar"
              className="avatar"
            />

            {/* PROFILE DETAILS */}
            {!passwordMode && (
              <>
                {isEditing ? (
                  <div className="info-box">
                    <label>Name</label>
                    <input
                      value={user.name}
                      onChange={(e) => setUser({ ...user, name: e.target.value })}
                    />

                    <label>Email</label>
                    <input
                      value={user.email}
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />

                    <label>Phone</label>
                    <input
                      value={user.phone}
                      onChange={(e) => setUser({ ...user, phone: e.target.value })}
                    />

                    <label>Address</label>
                    <input
                      value={user.address}
                      onChange={(e) => setUser({ ...user, address: e.target.value })}
                    />

                    <label>Country</label>
                    <input
                      value={user.country}
                      onChange={(e) => setUser({ ...user, country: e.target.value })}
                    />

                    <label>State</label>
                    <input
                      value={user.state}
                      onChange={(e) => setUser({ ...user, state: e.target.value })}
                    />

                    <button className="edit-btn" onClick={handleSaveProfile}>
                      SAVE
                    </button>
                  </div>
                ) : (
                  <div className="info-box">
                    <p><b>USER ID :</b> 00000</p>
                    <p><b>NAME :</b> {user.name}</p>
                    <p><b>Email :</b> {user.email}</p>
                    <p><b>Phone :</b> {user.phone || "Not Set"}</p>
                    <p><b>Address :</b> {user.address || "Not Set"}</p>
                    <p><b>Country :</b> {user.country || "Not Set"}</p>
                    <p><b>State :</b> {user.state || "Not Set"}</p>

                    <button className="edit-btn" onClick={() => setIsEditing(true)}>
                      EDIT
                    </button>
                  </div>
                )}
              </>
            )}

            {/* PASSWORD MODE */}
            {passwordMode && (
              <div className="info-box">
                <label>Current Password</label>
                <input
                  type="password"
                  value={passwordData.current}
                  onChange={(e) =>
                    setPasswordData({ ...passwordData, current: e.target.value })
                  }
                />

                <label>New Password</label>
                <input
                  type="password"
                  value={passwordData.newPass}
                  onChange={(e) =>
                    setPasswordData({ ...passwordData, newPass: e.target.value })
                  }
                />

                <label>Confirm New Password</label>
                <input
                  type="password"
                  value={passwordData.confirmPass}
                  onChange={(e) =>
                    setPasswordData({ ...passwordData, confirmPass: e.target.value })
                  }
                />

                <button className="password-btn" onClick={handlePasswordChange}>
                  UPDATE PASSWORD
                </button>
              </div>
            )}
          </div>

          {/* RIGHT BOX */}
          <div className="right-box">
            {!passwordMode && (
              <>
                <div className="input-block">
                  <label>opUSDT address :</label>
                  <input type="text" placeholder="Enter address" />
                </div>

                <div className="input-block">
                  <label>opDRN coin address :</label>
                  <input type="text" placeholder="Enter address" />
                </div>

                <div className="big-box"></div>

                <button
                  className="password-btn"
                  onClick={() => setPasswordMode(true)}
                >
                  Change Password
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
