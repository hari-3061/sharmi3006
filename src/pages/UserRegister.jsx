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

  function handleSubmit(e) {
    e.preventDefault();
    console.log("User Data:", form);
    alert("Registration Successful!");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-200 pt-24">
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

        <form className="space-y-4" onSubmit={handleSubmit}>

          {/* FULL NAME */}
          <input
            name="fullName"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg border"
            onChange={handleChange}
            value={form.fullName}
            required
          />

          {/* EMAIL */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg border"
            onChange={handleChange}
            value={form.email}
            required
          />

          {/* PASSWORD */}
          <input
            name="password"
            type="password"
            placeholder="Create Password"
            className="w-full p-3 rounded-lg border"
            onChange={handleChange}
            value={form.password}
            required
          />

          {/* PHONE */}
          <input
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 rounded-lg border"
            onChange={handleChange}
            value={form.phone}
            required
          />

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-xl font-semibold shadow-lg"
          >
            Register
          </button>
        </form>
      </motion.div>
    </div>
  );
}
