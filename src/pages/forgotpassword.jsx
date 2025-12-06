import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Navbar from "../components/Navbar";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Password Reset Email:", email);
    alert("Reset link sent to your email!");
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
          <Mail size={32} className="text-green-700" />
          <h2 className="text-3xl font-bold text-green-700">Forgot Password</h2>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>

          {/* EMAIL INPUT */}
          <input
            type="email"
            placeholder="Enter your registered Email"
            className="w-full p-3 rounded-lg border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-xl font-semibold shadow-lg mt-3"
          >
            Send Reset Link
          </button>
        </form>
      </motion.div>
    </div>
  );
}
