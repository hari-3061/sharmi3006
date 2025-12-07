import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/reset-password", { state: { email } });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Verify OTP
        </h2>

        <p className="text-center text-gray-600 mb-4">
          OTP sent to: <strong>{email}</strong>
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-gray-700 font-medium">Enter OTP</label>
            <input
              type="text"
              maxLength={6}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none 
                         focus:ring focus:ring-green-300 text-center tracking-widest text-xl"
              placeholder="______"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg 
                       font-semibold shadow-md mt-2"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}
