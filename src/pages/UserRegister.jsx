import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus } from "lucide-react";
import Navbar from "../components/Navbar";

export default function UserRegister() {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Create Account
        </h2>

        <form className="space-y-4">
          <div>
            <label className="text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Phone Number</label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter phone number"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold shadow-md mt-4"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
