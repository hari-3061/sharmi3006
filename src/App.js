import React, { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("register"); // register | login | forgot

  return (
    <div className="main">
      {/* REGISTER PAGE */}
      {page === "register" && (
        <div className="form-container">
          <h2>Register Now</h2>
          <input type="text" placeholder="Enter Name" />
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Create Password" />
          <input type="text" placeholder="Phone Number" />

          <button className="btn">Register</button>

          <p className="link" onClick={() => setPage("login")}>
            Already have an account? Login
          </p>
        </div>
      )}

      {/* LOGIN PAGE */}
      {page === "login" && (
        <div className="form-container">
          <h2>Login</h2>

          <input type="password" placeholder="Enter Password" />

          <button className="btn">Login</button>

          <p className="forgot" onClick={() => setPage("forgot")}>
            Forgot Password?
          </p>

          <p className="link" onClick={() => setPage("register")}>
            Create New Account
          </p>
        </div>
      )}

      {/* FORGOT PASSWORD PAGE */}
      {page === "forgot" && (
        <div className="form-container">
          <h2>Reset Password</h2>

          <input type="email" placeholder="Enter Your Email" />

          <button className="btn">Send Reset Link</button>

          <p className="link" onClick={() => setPage("login")}>
            Back to Login
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
