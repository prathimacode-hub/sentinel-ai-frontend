import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Exam Hall", path: "/exam-hall" },
    { name: "Live Monitoring", path: "/live-monitoring" },
    { name: "Logs", path: "/logs" }
  ];

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 px-3 py-2 rounded-lg font-bold text-lg">
            AI
          </div>

          <div>
            <h1 className="text-lg font-semibold">
              AI Proctoring System
            </h1>
            <p className="text-xs text-gray-400">
              Government of Andhra Pradesh
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`px-4 py-2 rounded-lg transition duration-200 ${
                location.pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Status Section */}
        <div className="hidden md:flex items-center gap-4">

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-300">AI Running</span>
          </div>

          <div className="bg-red-600 px-3 py-1 rounded-full text-sm">
            Live Monitoring
          </div>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-6 pb-4">

          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`block py-2 ${
                location.pathname === item.path
                  ? "text-blue-400"
                  : "text-gray-300"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <div className="mt-4 flex gap-3">

            <span className="bg-green-500 px-3 py-1 rounded text-sm">
              AI Running
            </span>

            <span className="bg-red-600 px-3 py-1 rounded text-sm">
              Live
            </span>

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
