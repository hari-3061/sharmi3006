import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Landing from "./pages/Landing";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import ForgotPassword from "./pages/ForgotPassword";
import UserLogin from "./pages/UserLogin";   // If not added earlier

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/userregister" element={<UserRegister />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/userlogin" element={<UserLogin />} /> 
        <Route path="/forgotpassword" element={<ForgotPassword />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
