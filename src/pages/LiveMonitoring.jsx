import React, { useState } from "react";
import CCTVFeed from "../components/CCTVFeed";
import CameraFeed from "../components/CameraFeed";
import AudioMonitor from "../components/AudioMonitor";
import AlertsPanel from "../components/AlertsPanel";
import EvidencePanel from "../components/EvidencePanel";
import LogsPanel from "../components/LogsPanel";
import { useNavigate } from "react-router-dom";

const LiveMonitoring = () => {
  const navigate = useNavigate();
  const [monitoring, setMonitoring] = useState(true);

  const toggleMonitoring = () => {
    setMonitoring(!monitoring);
  };

  return (
    <div className="p-6 text-white">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">

        <div>
          <h1 className="text-2xl font-bold">
            AI Live Monitoring Dashboard
          </h1>
          <p className="text-gray-400">
            Real-time Proctoring & Surveillance System
          </p>
        </div>

        {/* Controls */}
        <div className="flex gap-3 mt-4 md:mt-0">

          <button
            onClick={() => navigate("/")}
            className="bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600"
          >
            Dashboard
          </button>

          <button
            onClick={() => navigate("/exam-hall")}
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Exam Hall
          </button>

          <button
            onClick={toggleMonitoring}
            className={`px-4 py-2 rounded-lg ${
              monitoring
                ? "bg-red-600 hover:bg-red-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {monitoring ? "Stop Monitoring" : "Start Monitoring"}
          </button>

        </div>
      </div>

      {/* Monitoring Status */}
      <div className="bg-slate-900 p-4 rounded-xl mb-6 flex justify-between items-center">

        <div>
          <p className="text-gray-400 text-sm">
            System Status
          </p>

          <h2
            className={`text-xl font-bold ${
              monitoring ? "text-green-400" : "text-red-400"
            }`}
          >
            {monitoring ? "AI Monitoring Active" : "Monitoring Stopped"}
          </h2>
        </div>

        <div className="flex gap-6 text-sm">

          <div>
            <p className="text-gray-400">CCTV</p>
            <p className="text-green-400">Live</p>
          </div>

          <div>
            <p className="text-gray-400">Laptop Camera</p>
            <p className="text-green-400">Active</p>
          </div>

          <div>
            <p className="text-gray-400">Audio</p>
            <p className="text-green-400">Monitoring</p>
          </div>

        </div>

      </div>

      {/* Main Monitoring Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Row 1 */}
        <CCTVFeed />
        <CameraFeed />
        <AudioMonitor />

        {/* Row 2 */}
        <AlertsPanel />
        <EvidencePanel />
        <LogsPanel />

      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        AI Enabled Live Proctoring System | Real-Time Monitoring Active
      </div>

    </div>
  );
};

export default LiveMonitoring;
