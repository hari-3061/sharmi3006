import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  if (inView) controls.start({ opacity: 1, y: 0 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className="border rounded-lg p-4 cursor-pointer"
      onClick={onClick}
    >
      <h3 className="font-semibold flex justify-between items-center">
        {question} <span>{isOpen ? "-" : "+"}</span>
      </h3>
      {isOpen && <p className="mt-2 text-gray-700">{answer}</p>}
    </motion.div>
  );
};

export default function FAQ() {
  const [faqOpen, setFaqOpen] = useState(null);
  const faqs = [
    { q: "How can I schedule a pickup?", a: "Register, submit e-waste details, and admin will schedule a pickup." },
    { q: "What types of e-waste are accepted?", a: "All electronic items like phones, laptops, batteries, etc." },
    { q: "Do you provide email notifications?", a: "Yes, you will receive updates on your pickup status." }
  ];

  return (
    <section id="faq" className="px-10 py-20">
      <h2 className="text-4xl font-bold text-green-700 text-center">FAQ</h2>
      <div className="mt-14 max-w-3xl mx-auto space-y-4">
        {faqs.map((f, idx) => (
          <FaqItem
            key={idx}
            question={f.q}
            answer={f.a}
            isOpen={faqOpen === idx}
            onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
          />
        ))}
      </div>
    </section>
  );
}
