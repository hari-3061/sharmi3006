import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus } from "lucide-react";
import Navbar from "../components/Navbar";

export default function UserRegister() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-200 pt-28">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg mx-auto bg-white/40 backdrop-blur-xl shadow-xl p-8 rounded-2xl border border-white/30"
      >
        <div className="flex items-center gap-3 mb-6">
          <UserPlus size={32} className="text-green-700" />
          <h2 className="text-3xl font-bold text-green-700">User Registration</h2>
        </div>

        <div className="space-y-4">
          <input
            name="fullName"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg border"
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg border"
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 rounded-lg border"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg border"
            onChange={handleChange}
          />

          <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl shadow-md font-semibold">
            Register
          </button>
        </div>
      </motion.div>
    </div>
  );
}
