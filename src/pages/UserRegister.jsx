import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Using axios directly for FormData

export default function UserRegister() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  // Step 1 States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  // Step 2 States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showRules, setShowRules] = useState(false);

  // Step 3 Files
  const [idProof, setIdProof] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [otherDoc, setOtherDoc] = useState(null);

  const [message, setMessage] = useState("");

  // Password rules
  const rules = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  // Handle registration with FormData for files
  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("address", address);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("username", username);
      formData.append("password", password);

      if (idProof) formData.append("idProof", idProof);
      if (profilePhoto) formData.append("profilePhoto", profilePhoto);
      if (otherDoc) formData.append("otherDoc", otherDoc);

      // Send to backend
      const res = await axios.post("http://localhost:8080/api/auth/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage(res.data); // Backend message
      setTimeout(() => navigate("/login"), 2000); // Redirect to login
    } catch (err) {
      console.error(err);
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          {step === 1 && "Create Account"}
          {step === 2 && "Login Details"}
          {step === 3 && "Upload Documents"}
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* STEP 1 */}
          {step === 1 && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
              <PhoneInput
                country="in"
                value={phone}
                onChange={(value) => setPhone(value)}
                inputStyle={{ width: "100%", height: "48px", borderRadius: "8px" }}
                buttonStyle={{ borderRadius: "8px 0 0 8px" }}
                required
              />
              <textarea
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                max={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
              <div className="flex space-x-4 mt-2">
                {["Male", "Female", "Other"].map((g) => (
                  <label key={g} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      onChange={(e) => setGender(e.target.value)}
                      required
                    />
                    <span>{g}</span>
                  </label>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full bg-green-600 text-white py-3 rounded-lg mt-4"
              >
                Next →
              </button>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                onFocus={() => setShowRules(true)}
                onBlur={() => setShowRules(false)}
                required
              />
              {showRules && (
                <div className="text-sm mt-2">
                  <p className={rules.length ? "text-green-600" : "text-red-600"}>• At least 8 characters</p>
                  <p className={rules.upper ? "text-green-600" : "text-red-600"}>• One uppercase letter</p>
                  <p className={rules.lower ? "text-green-600" : "text-red-600"}>• One lowercase letter</p>
                  <p className={rules.number ? "text-green-600" : "text-red-600"}>• One number</p>
                  <p className={rules.special ? "text-green-600" : "text-red-600"}>• One special character</p>
                </div>
              )}
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
              <button
                type="button"
                onClick={() => setStep(3)}
                className="w-full bg-green-600 text-white py-3 rounded-lg mt-4"
              >
                Next →
              </button>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <div>
                <label>ID Proof</label>
                <input type="file" onChange={(e) => setIdProof(e.target.files[0])} />
              </div>
              <div>
                <label>Profile Photo</label>
                <input type="file" onChange={(e) => setProfilePhoto(e.target.files[0])} />
              </div>
              <div>
                <label>Other Document</label>
                <input type="file" onChange={(e) => setOtherDoc(e.target.files[0])} />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg mt-4"
              >
                Register
              </button>
            </>
          )}
        </form>

        {message && <p className="mt-4 text-center text-red-600">{message}</p>}
      </div>
    </div>
  );
}
