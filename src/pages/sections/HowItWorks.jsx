import React from "react";
import { Users, Smartphone, Calendar, Mail } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="howitworks" className="px-10 py-20">
      <h2 className="text-4xl font-bold text-green-700 text-center">How It Works</h2>
      <div className="grid md:grid-cols-4 gap-10 mt-14 text-center">
        <div className="card">
          <Users size={40} className="text-green-700 mx-auto" />
          <h3 className="mt-3 font-semibold">Register an Account</h3>
        </div>
        <div className="card">
          <Smartphone size={40} className="text-green-700 mx-auto" />
          <h3 className="mt-3 font-semibold">Submit E-Waste Details</h3>
        </div>
        <div className="card">
          <Calendar size={40} className="text-green-700 mx-auto" />
          <h3 className="mt-3 font-semibold">Admin Schedules Pickup</h3>
        </div>
        <div className="card">
          <Mail size={40} className="text-green-700 mx-auto" />
          <h3 className="mt-3 font-semibold">Get Email Confirmation</h3>
        </div>
      </div>
    </section>
  );
}
