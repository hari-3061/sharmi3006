import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Navbar from "../components/Navbar";

export default function AdminLogin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 pt-28">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto bg-white/60 backdrop-blur-xl p-8 rounded-2xl shadow-xl border"
      >
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck size={32} className="text-gray-700" />
          <h2 className="text-3xl font-bold text-gray-700">Admin Login</h2>
        </div>

        <input
          type="text"
          placeholder="Admin Username"
          className="w-full p-3 rounded-lg border mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg border mb-4"
        />

        <button className="w-full bg-gray-700 hover:bg-black text-white py-3 rounded-xl font-semibold shadow-md">
          Login
        </button>
      </motion.div>
    </div>
  );
}
