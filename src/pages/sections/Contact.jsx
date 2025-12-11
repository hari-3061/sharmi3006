import React from "react";
import { Users, Phone, Mail } from "lucide-react";

export default function Contact() {
  const contacts = [
    { icon: <Users size={40} className="text-green-700 mx-auto" />, title: "Our Team", info: "We respond within 24 hours" },
    { icon: <Phone size={40} className="text-green-700 mx-auto" />, title: "Phone", info: "+1 456-890-2334" },
    { icon: <Mail size={40} className="text-green-700 mx-auto" />, title: "Email", info: "support@ewaste.com" }
  ];

  return (
    <section id="contact" className="px-10 py-20 bg-green-50">
      <h2 className="text-4xl font-bold text-green-700 text-center">Contact Us</h2>
      <div className="grid md:grid-cols-3 gap-10 mt-14 text-center">
        {contacts.map((c, idx) => (
          <div key={idx} className="card">
            {c.icon}
            <h3 className="font-bold mt-4">{c.title}</h3>
            <p className="text-gray-700">{c.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
