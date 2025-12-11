import React from "react";
import { motion } from "framer-motion";

export default function Branches() {
  const branches = [
    { city: "San Francisco, USA", manager: "Emma Wilson", email: "sf.branch@ewaste.com", address: "101 Eco Street, California, USA" },
    { city: "London, UK", manager: "James Carter", email: "london.branch@ewaste.com", address: "22 Green Lane, London, UK" },
    { city: "Tokyo, Japan", manager: "Yuki Tanaka", email: "tokyo.branch@ewaste.com", address: "7 Chome-11 Eco Road, Tokyo, Japan" }
  ];

  return (
    <section id="branches" className="px-10 py-20">
      <h2 className="text-4xl font-bold text-green-700 text-center">Our Global Branches</h2>
      <div className="grid md:grid-cols-3 gap-8 mt-14">
        {branches.map((b, idx) => (
          <motion.div key={idx} whileHover={{ scale: 1.05 }} className="card">
            <h3 className="text-xl font-bold text-green-700">{b.city}</h3>
            <p className="mt-2 text-gray-700"><b>Manager:</b> {b.manager}</p>
            <p className="text-gray-700"><b>Email:</b> {b.email}</p>
            <p className="text-gray-700"><b>Address:</b> {b.address}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
