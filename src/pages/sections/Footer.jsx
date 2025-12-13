import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-10 px-6 mt-20">
      {/* Quote */}
      <h2 className="text-center text-xl italic font-medium tracking-wide">
        “The greatest threat to our planet is the belief that someone else will save it.”
      </h2>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-6 text-white">
        <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
        <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
        <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
        <a href="#" aria-label="LinkedIn"><Linkedin size={24} /></a>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6 mt-6 text-lg">
        <a href="/" className="hover:text-gray-300">Home</a>
        <a href="#about" className="hover:text-gray-300">About</a>
        <a href="#features" className="hover:text-gray-300">Features</a>
        <a href="#howitworks" className="hover:text-gray-300">How It Works</a>
        <a href="#testimonials" className="hover:text-gray-300">Testimonials</a>
        <a href="#faq" className="hover:text-gray-300">FAQ</a>
        <a href="#blog" className="hover:text-gray-300">Blog</a>
        <a href="#branches" className="hover:text-gray-300">Branches</a>
        <a href="#contact" className="hover:text-gray-300">Contact</a>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm tracking-wide text-gray-200">
        © {new Date().getFullYear()} Smart E-Waste. All Rights Reserved.
      </div>
    </footer>
  );
}
