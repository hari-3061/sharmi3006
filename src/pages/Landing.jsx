import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Blog from "./sections/Blog";
import Branches from "./sections/Branches";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Landing() {
  const navigate = useNavigate(); // ✅ Hook inside component
  const [faqOpen, setFaqOpen] = useState(null); // State for FAQ

  return (
    <div className="min-h-screen bg-green-50 font-sans overflow-x-hidden">
      <Navbar navigate={navigate} />
      <Hero navigate={navigate} />
      <About />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ faqOpen={faqOpen} setFaqOpen={setFaqOpen} />
      <Blog />
      <Branches />
      <Contact />
      <Footer />
    </div>
  );
}
