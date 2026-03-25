import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Registered Students",
      value: 30,
      color: "text-blue-400",
      bg: "bg-slate-800",
    },
    {
      title: "Active Cameras",
      value: 30,
      color: "text-green-400",
      bg: "bg-slate-800",
    },
    {
      title: "AI Alerts",
      value: 6,
      color: "text-red-400",
      bg: "bg-slate-800",
    },
    {
      title: "Monitoring Status",
      value: "Running",
      color: "text-green-400",
      bg: "bg-slate-800",
    },
  ];

  return (
    <div className="p-6 text-white">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          AI Proctoring System Dashboard
        </h1>
        <p className="text-gray-400">
          Government of Andhra Pradesh - School Education Department
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bg} p-6 rounded-xl shadow-lg`}
          >
            <p className="text-gray-400 text-sm">
              {stat.title}
            </p>

            <h2 className={`text-2xl font-bold ${stat.color}`}>
              {stat.value}
            </h2>
          </div>
        ))}

      </div>

      {/* Monitoring Controls */}
      <div className="bg-slate-900 p-6 rounded-xl shadow-lg mb-8">

        <h2 className="text-xl font-semibold mb-4">
          Monitoring Controls
        </h2>

        <div className="flex flex-wrap gap-4">

          <button
            onClick={() => navigate("/live-monitoring")}
            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Start Live Monitoring
          </button>

          <button
            onClick={() => navigate("/exam-hall")}
            className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            View Exam Hall
          </button>

          <button
            className="bg-yellow-600 px-6 py-3 rounded-lg hover:bg-yellow-700 transition"
          >
            Generate Report
          </button>

          <button
            className="bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700 transition"
          >
            Stop Monitoring
          </button>

        </div>

      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* AI Monitoring */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-3">
            AI Monitoring Overview
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>✔ Face Recognition Active</li>
            <li>✔ CCTV Monitoring Running</li>
            <li>✔ Audio Analytics Enabled</li>
            <li>✔ Gaze Tracking Active</li>
            <li>✔ Evidence Capture Enabled</li>
            <li>✔ Real-Time Alerts Enabled</li>
          </ul>
        </div>

        {/* PoC Details */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-3">
            Proof of Concept Details
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>30 Registered Students</li>
            <li>10 Minute Exam Session</li>
            <li>6-10 Malpractice Events</li>
            <li>Seat Swap Detection</li>
            <li>Multiple Face Detection</li>
            <li>Voice Detection</li>
            <li>AI Accuracy Target: 80%</li>
          </ul>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        AI Enabled Live Proctoring System | Hackathon Proof of Concept
      </div>

    </div>
  );
};

export default Dashboard;
