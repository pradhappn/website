import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // NOTE: In a real application, you would perform authentication here.
    // For this example, we'll just navigate to the user profile.
    console.log('Login successful, navigating to profile...');
    navigate('/user-profile');
  };

  return (
    <div>
      <h2>User Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email: </label>
          <input type="email" placeholder="user@example.com" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default UserLogin;