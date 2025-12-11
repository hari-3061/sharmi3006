import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-20 px-10 flex flex-col md:flex-row items-center justify-between">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-xl"
      >
        <h1 className="text-5xl font-extrabold text-green-700 leading-tight">
          Smart E-Waste Collection<br />& Eco-Friendly Management
        </h1>
        <p className="mt-4 text-gray-700 text-lg">
          Join us in building a cleaner environment with easy e-waste
          scheduling, smart tracking, and digital pickup management.
        </p>
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => navigate("/userregister")}
            className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-xl font-semibold shadow-md"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/userlogin")}
            className="px-7 py-3 border border-green-700 text-green-700 rounded-xl font-semibold hover:bg-green-100"
          >
            Login
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mt-12 md:mt-0"
      >
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/recycling-planet-3d-icon-download-in-png-blend-fbx-gltf-file-formats--ecosystem-earth-globe-world-environment-pack-nature-icons-10271736.png?f=webp"
          alt="Eco Illustration"
          className="w-[330px] md:w-[430px] drop-shadow-xl rounded-xl"
        />
      </motion.div>
    </section>
  );
}
