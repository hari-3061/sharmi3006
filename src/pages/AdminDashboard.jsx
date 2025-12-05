import React from "react";
import { motion } from "framer-motion";
import { Users, ClipboardList, CheckCircle } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 px-10 pt-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center"
        >
          <Users size={48} className="text-blue-600 mb-3" />
          <h3 className="text-xl font-semibold">Registered Users</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center"
        >
          <ClipboardList size={48} className="text-green-600 mb-3" />
          <h3 className="text-xl font-semibold">Pending Approvals</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center"
        >
          <CheckCircle size={48} className="text-purple-600 mb-3" />
          <h3 className="text-xl font-semibold">Approved Users</h3>
        </motion.div>

      </div>
    </div>
  );
}
