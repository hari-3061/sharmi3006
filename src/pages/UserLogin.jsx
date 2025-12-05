import React from "react";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";
import Navbar from "../components/Navbar";

export default function UserLogin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-200 pt-28">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto bg-white/40 backdrop-blur-xl p-8 rounded-2xl shadow-xl border"
      >
        <div className="flex items-center gap-3 mb-6">
          <LogIn size={30} className="text-green-700" />
          <h2 className="text-3xl font-bold text-green-700">User Login</h2>
        </div>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg border mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg border mb-4"
        />

        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold shadow-md">
          Login
        </button>
      </motion.div>
    </div>
  );
}
