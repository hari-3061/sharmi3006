import React from "react";
import { Link } from "react-router-dom";
import { Recycle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/60 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center fixed top-0 z-50">
      <div className="flex items-center gap-2">
        <Recycle className="text-green-600" size={28} />
        <h1 className="text-2xl font-bold text-green-700">Smart E-Waste</h1>
      </div>

      <div className="flex gap-6 text-lg font-medium">
        <Link to="/" className="hover:text-green-600">Home</Link>
        <Link to="/login" className="hover:text-green-600">User Login</Link>
        <Link to="/admin-login" className="hover:text-green-600">Admin</Link>
      </div>
    </nav>
  );
}
