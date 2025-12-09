import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function UserRegister() {
  const [password, setPassword] = useState("");
  const [showRules, setShowRules] = useState(false);
  const [phone, setPhone] = useState("");

  // NEW STATES
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  // Password validation rules
  const rules = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Create Account
        </h2>

        <form className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-700 font-medium">Password</label>

            <input
              type="password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setShowRules(true)}
              onBlur={() => setShowRules(false)}
            />

            {/* Password Rules */}
            {showRules && (
              <div className="mt-2 p-3 bg-gray-50 border rounded-lg text-sm">
                <p className={rules.length ? "text-green-600" : "text-red-600"}>• At least 8 characters</p>
                <p className={rules.upper ? "text-green-600" : "text-red-600"}>• One uppercase letter</p>
                <p className={rules.lower ? "text-green-600" : "text-red-600"}>• One lowercase letter</p>
                <p className={rules.number ? "text-green-600" : "text-red-600"}>• One number</p>
                <p className={rules.special ? "text-green-600" : "text-red-600"}>• One special character</p>
              </div>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-gray-700 font-medium">Phone Number</label>

            <PhoneInput
              country={"in"}
              value={phone}
              onChange={(value) => setPhone(value)}
              inputStyle={{
                width: "100%",
                height: "48px",
                borderRadius: "8px",
                paddingLeft: "48px",
                border: "1px solid #d1d5db",
                fontSize: "16px",
              }}
              buttonStyle={{
                border: "1px solid #d1d5db",
                borderRadius: "8px 0 0 8px",
              }}
            />
          </div>

          {/* Address */}
          <div>
            <label className="text-gray-700 font-medium">Address</label>
            <textarea
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              rows="3"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="text-gray-700 font-medium">Date of Birth</label>
            <input
              type="date"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              max={new Date().toISOString().split("T")[0]}
            />
          </div>

          {/* Gender (NEW) */}
          <div>
            <label className="text-gray-700 font-medium">Gender</label>
            <div className="flex items-center space-x-4 mt-2">

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="w-4 h-4"
                  onChange={(e) => setGender(e.target.value)}
                />
                <span>Male</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="w-4 h-4"
                  onChange={(e) => setGender(e.target.value)}
                />
                <span>Female</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  className="w-4 h-4"
                  onChange={(e) => setGender(e.target.value)}
                />
                <span>Other</span>
              </label>

            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold shadow-md mt-4"
          >
            Register
          </button>

        </form>
      </div>
    </div>
  );
}
