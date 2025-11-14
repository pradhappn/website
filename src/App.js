import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AdminLogin from "./pages/AdminLogin";
import UserSignIn from "./pages/UserSignIn";
import UserSignUp from "./pages/UserSignUp";
import AdminDashboard from "./Admin/AdminDashboard";
import UserProfile from "./user/UserProfile";
import UserDashboard from "./user/UserDashboard"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/signin" element={<UserSignIn />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/user/profile" element={<UserProfile/>} />
        <Route path="/user/UserDashboard" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
