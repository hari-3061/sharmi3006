import React from "react";
import { motion } from "framer-motion";
import { Leaf, Mail, Smartphone, Recycle } from "lucide-react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";   // ⬅️ ADD

export default function Landing() {

  const navigate = useNavigate(); // ⬅️ ADD

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navbar />

      <div className="px-10 pt-28 md:flex-row flex flex-col items-center justify-between">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl font-extrabold text-green-700 leading-tight">
            Smart E-Waste <br /> Collection & Management
          </h1>

          <p className="mt-4 text-lg text-gray-700">
            A clean, sustainable, and user-friendly platform to submit your
            e-waste details and help build a greener future.
          </p>

          <div className="flex gap-4 mt-6">

            {/* REGISTER BUTTON */}
            <button
              onClick={() => navigate("/userregister")}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md font-semibold"
            >
              Register Now
            </button>

            {/* LOGIN BUTTON */}
            <button
              onClick={() => navigate("/userlogin")}
              className="border border-green-600 text-green-700 hover:bg-green-100 px-6 py-3 rounded-xl shadow-md font-semibold"
            >
              Login
            </button>
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
