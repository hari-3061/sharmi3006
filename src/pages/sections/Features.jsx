import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Recycle, Mail } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="px-10 py-20 bg-green-100">
      <h2 className="text-4xl font-bold text-green-700 text-center">Features</h2>
      <div className="grid md:grid-cols-3 gap-10 mt-14">
        <motion.div whileHover={{ scale: 1.05 }} className="card">
          <Smartphone className="text-green-600 mx-auto" size={45} />
          <h3 className="font-bold text-xl mt-4">Easy Request Submission</h3>
          <p className="text-gray-600 mt-2">
            Enter your e-waste details in seconds and schedule a pickup.
          </p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="card">
          <Recycle className="text-green-600 mx-auto" size={45} />
          <h3 className="font-bold text-xl mt-4">Eco-Friendly Processing</h3>
          <p className="text-gray-600 mt-2">
            Ensuring zero-harm recycling and responsible waste handling.
          </p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="card">
          <Mail className="text-green-600 mx-auto" size={45} />
          <h3 className="font-bold text-xl mt-4">Email Notifications</h3>
          <p className="text-gray-600 mt-2">
            Receive instant updates on pickup schedules and service status.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
