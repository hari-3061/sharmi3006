import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function UserRegister() {

  const [step, setStep] = useState(1);

  // Step 1 States
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  // Step 2 States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showRules, setShowRules] = useState(false);

  // Step 3 States
  const [idProof, setIdProof] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [otherDoc, setOtherDoc] = useState(null);

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
        
        {/* Dynamic Heading */}
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          {step === 1 && "Create Account"}
          {step === 2 && "Login Details"}
          {step === 3 && "Upload Documents"}
        </h2>

        {/* MAIN FORM */}
        <form className="space-y-4">

          {/* ------------------------ STEP 1 ------------------------ */}
          {step === 1 && (
            <>
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

              {/* Phone */}
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
                  rows="3"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
              </div>

              {/* DOB */}
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

              {/* Gender */}
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

              {/* NEXT BUTTON */}
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold shadow-md mt-4"
              >
                Next →
              </button>
            </>
          )}

          {/* ------------------------ STEP 2 ------------------------ */}
          {step === 2 && (
            <>
              {/* Username */}
              <div>
                <label className="text-gray-700 font-medium">Username</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-gray-700 font-medium">Password</label>
                <input
                  type="password"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setShowRules(true)}
                  onBlur={() => setShowRules(false)}
                />

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

              {/* Confirm Password */}
              <div>
                <label className="text-gray-700 font-medium">Confirm Password</label>
                <input
                  type="password"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                  placeholder="Re-enter password"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                />
              </div>

              {/* NEXT BUTTON */}
              <button
                type="button"
                onClick={() => setStep(3)}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold shadow-md mt-4"
              >
                Next →
              </button>
            </>
          )}

          {/* ------------------------ STEP 3 ------------------------ */}
          {step === 3 && (
            <>
              {/* ID Proof */}
              <div>
                <label className="text-gray-700 font-medium">ID Proof (Aadhar / Passport)</label>
                <input
                  type="file"
                  className="mt-1"
                  onChange={(e) => setIdProof(e.target.files[0])}
                />
              </div>

              {/* Profile Photo */}
              <div>
                <label className="text-gray-700 font-medium">Profile Photo</label>
                <input
                  type="file"
                  className="mt-1"
                  onChange={(e) => setProfilePhoto(e.target.files[0])}
                />
              </div>

              {/* Other Document */}
              <div>
                <label className="text-gray-700 font-medium">Any Other Document</label>
                <input
                  type="file"
                  className="mt-1"
                  onChange={(e) => setOtherDoc(e.target.files[0])}
                />
              </div>

              {/* Final Register */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold shadow-md mt-4"
              >
                Register
              </button>
            </>
          )}

        </form>

      </div>
    </div>
  );
}
