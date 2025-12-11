// src/pages/sections/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, Recycle } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md">
      <motion.div
        className="absolute left-10 top-20 text-green-400 opacity-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Leaf size={30} />
      </motion.div>
      <motion.div
        className="absolute right-20 top-24 text-green-500 opacity-30"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Recycle size={32} />
      </motion.div>

      <div className="flex justify-between items-center px-10 py-4 relative">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Recycle className="text-green-600" size={32} />
          <h1 className="text-2xl font-bold text-green-700">E-Waste</h1>
        </motion.div>

        <motion.ul
          className="hidden md:flex gap-8 text-green-700 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#howitworks">How It Works</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#branches">Branches</a></li>
          <li><a href="#contact">Contact</a></li>
        </motion.ul>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <button
            onClick={() => navigate("/userlogin")}
            className="px-5 py-2 border border-green-600 text-green-700 hover:bg-green-100 rounded-lg font-medium transition"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/userregister")}
            className="px-5 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg font-medium shadow-md transition"
          >
            Register
          </button>
        </motion.div>
      </div>
    </div>
  );
}
