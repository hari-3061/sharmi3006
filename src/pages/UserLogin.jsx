import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          User Login
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded-lg mt-1"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold">Password</label>
          <input
            type="password"
            className="w-full p-3 border rounded-lg mt-1"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="text-right mb-4">
          <Link to="/forgotpassword" className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </div>

        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">
          Login
        </button>
      </div>
    </div>
  );
}
