import React from "react";
import { motion } from "framer-motion";

export default function Blog() {
  const blogs = [
    { title: "5 Tips for E-Waste Recycling", desc: "Learn how to efficiently recycle your e-waste.", img: "https://source.unsplash.com/400x300/?recycling" },
    { title: "Smart E-Waste Management", desc: "Discover how technology is improving e-waste collection.", img: "https://source.unsplash.com/400x300/?electronics" },
    { title: "Eco-Friendly Electronics", desc: "Guide to buying and disposing of electronics responsibly.", img: "https://source.unsplash.com/400x300/?eco" }
  ];

  return (
    <section id="blog" className="px-10 py-20 bg-green-100">
      <h2 className="text-4xl font-bold text-green-700 text-center">Blog</h2>
      <div className="grid md:grid-cols-3 gap-10 mt-14">
        {blogs.map((b, idx) => (
          <motion.div
            key={idx}
            ref={b.ref}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            className="card"
          >
            <img src={b.img} alt={b.title} className="w-full rounded-lg mb-3" />
            <h3 className="font-bold text-lg">{b.title}</h3>
            <p className="text-gray-600 mt-1">{b.desc}</p>
            <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Read More
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
