import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    { name: "Alice Johnson", role: "Software Engineer", quote: "This e-waste platform made recycling so easy and efficient!" },
    { name: "Rohan Mehta", role: "Environmental Activist", quote: "Amazing service with quick pickups. Highly recommend!" },
    { name: "Yuki Tanaka", role: "Manager", quote: "A perfect solution for smart and responsible e-waste management." }
  ];

  return (
    <section id="testimonials" className="px-10 py-20 bg-green-50">
      <h2 className="text-4xl font-bold text-green-700 text-center">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-10 mt-14">
        {testimonials.map((t, idx) => (
          <motion.div key={idx} whileHover={{ scale: 1.05 }} className="card">
            <p className="text-gray-700">"{t.quote}"</p>
            <h4 className="font-bold mt-3">{t.name}</h4>
            <p className="text-gray-600 text-sm">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
