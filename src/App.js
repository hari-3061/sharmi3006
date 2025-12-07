import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
  return (
    <Router>
      <div>
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="logo">Smart E-Waste</div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/login">User Login</Link>
            <Link to="/admin">Admin</Link>
          </div>
        </nav>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/userlogin" element={<LoginPage />} />
         <Route path="/userregister" element={<RegisterPage />} />

        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-container">
      <h1>Smart E-Waste Collection & Management</h1>
      <p>
        A clean, sustainable, and user-friendly platform to submit your
        e-waste details and help build a greener future.
      </p>

      <Link to="/register">
        <button className="btn1">Register Now</button>
      </Link>

      <Link to="/login">
        <button className="btn2">Login</button>
      </Link>
    </div>
  );
}

export default App;
