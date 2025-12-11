import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-10 px-10 mt-20">
      <h2 className="text-center text-xl italic font-medium tracking-wide">
        “The greatest threat to our planet is the belief that someone else will save it.”
      </h2>
      <div className="flex justify-center gap-6 mt-6 text-white">
        <a href="#"><Facebook size={24} /></a>
        <a href="#"><Twitter size={24} /></a>
        <a href="#"><Instagram size={24} /></a>
        <a href="#"><Linkedin size={24} /></a>
      </div>
      <div className="flex justify-center gap-8 mt-6 text-lg">
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#howitworks">How It Works</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#faq">FAQ</a>
        <a href="#blog">Blog</a>
        <a href="#branches">Branches</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
}
