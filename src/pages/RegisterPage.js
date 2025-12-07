import React from "react";

function RegisterPage() {
  return (
    <div className="form-container">
      <h2>Register Now</h2>

      <input type="text" placeholder="Enter Name" />
      <input type="email" placeholder="Enter Email" />
      <input type="password" placeholder="Create Password" />
      <input type="text" placeholder="Phone Number" />

      <button className="btn">Register</button>
    </div>
  );
}

export default RegisterPage;
