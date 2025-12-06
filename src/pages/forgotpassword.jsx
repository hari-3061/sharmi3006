import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Reset Password
        </h2>

        <p className="text-gray-600 text-center mb-4">
          Enter your registered email to receive reset link.
        </p>

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

        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">
          Submit
        </button>
      </div>
    </div>
  );
}

