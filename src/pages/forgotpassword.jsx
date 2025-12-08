import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verify-otp", { state: { email } });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Forgot Password
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-gray-700 font-medium">Enter Email</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 border rounded-lg 
                focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 
              text-white py-3 rounded-lg font-semibold shadow-md mt-2"
          >
            Get OTP
          </button>
        </form>
      </div>
    </div>
  );
}
