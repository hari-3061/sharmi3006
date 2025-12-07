import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    alert("Password Reset Successful!");

    // Redirect user to login page
    navigate("/userlogin");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Reset Password
        </h2>

        <p className="text-center text-gray-600 mb-4">
          Resetting password for: <strong>{email}</strong>
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-gray-700 font-medium">New Password</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none 
                         focus:ring focus:ring-green-300"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Confirm Password</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none 
                         focus:ring focus:ring-green-300"
              placeholder="Re-enter password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg 
                       font-semibold shadow-md mt-2"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
