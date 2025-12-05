import React from "react";
import { motion } from "framer-motion";
import { Leaf, Mail, Smartphone, Recycle } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navbar />

      <div className="pt-28 px-10 flex flex-col md:flex-row items-center justify-between">
        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl font-extrabold text-green-700 leading-tight">
            Smart E-Waste Collection & Management
          </h1>

          <p className="mt-4 text-lg text-gray-700">
            A clean, sustainable, and user-friendly platform to submit your
            e-waste details and help build a greener future.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="/register"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md font-semibold"
            >
              Register Now
            </a>

            <a
              href="/login"
              className="border border-green-600 text-green-700 hover:bg-green-100 px-6 py-3 rounded-xl shadow-md font-semibold"
            >
              Login
            </a>
          </div>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-10 md:mt-0"
        >
          <Recycle size={260} className="text-green-500 drop-shadow-xl" />
        </motion.div>
      </div>
    </div>
  );
}
