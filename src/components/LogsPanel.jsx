import React, { useEffect, useState } from "react";

const LogsPanel = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    generateMockLogs();
  }, []);

  const logEvents = [
    "AI Monitoring Started",
    "Face Detection Running",
    "CCTV Feed Active",
    "Audio Monitoring Enabled",
    "Seat Swap Alert Generated",
    "Multiple Face Detected",
    "Suspicious Audio Detected",
    "Proctor Notified",
    "Evidence Captured",
    "Student Gaze Deviation",
    "Unauthorized Movement",
    "System Health Check Completed",
  ];

  const generateMockLogs = () => {
    setInterval(() => {
      const randomEvent =
        logEvents[Math.floor(Math.random() * logEvents.length)];

      const newLog = {
        id: Date.now(),
        message: randomEvent,
        time: new Date().toLocaleTimeString(),
        status: getStatus(randomEvent),
      };

      setLogs((prev) => [newLog, ...prev.slice(0, 12)]);
    }, 4000);
  };

  const getStatus = (event) => {
    if (event.includes("Alert") || event.includes("Detected")) return "warning";
    if (event.includes("Started") || event.includes("Active")) return "success";
    return "info";
  };

  const getColor = (status) => {
    switch (status) {
      case "warning":
        return "text-red-400";
      case "success":
        return "text-green-400";
      default:
        return "text-blue-400";
    }
  };

  return (
    <div className="bg-slate-900 rounded-2xl shadow-lg p-4 text-white">

      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">
          System Logs & Monitoring History
        </h2>

        <div className="bg-blue-600 px-3 py-1 rounded-full text-sm">
          Live Logs
        </div>
      </div>

      {/* Logs List */}
      <div className="space-y-2 max-h-64 overflow-y-auto">

        {logs.length === 0 ? (
          <p className="text-gray-400 text-sm">
            No system logs yet...
          </p>
        ) : (
          logs.map((log) => (
            <div
              key={log.id}
              className="bg-slate-800 p-3 rounded-lg flex justify-between items-center"
            >
              <div>
                <p className={`font-semibold ${getColor(log.status)}`}>
                  {log.message}
                </p>

                <p className="text-xs text-gray-400">
                  {log.time}
                </p>
              </div>

              <span className="text-xs text-gray-500">
                AI Engine
              </span>
            </div>
          ))
        )}
      </div>

      {/* System Health */}
      <div className="mt-4 bg-slate-800 p-3 rounded-lg">

        <p className="text-sm text-gray-400">
          System Health
        </p>

        <p className="text-green-400 font-semibold">
          All Monitoring Systems Operational
        </p>

      </div>

      {/* Log Summary */}
      <div className="grid grid-cols-3 gap-3 mt-4 text-center">

        <div className="bg-slate-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">
            Total Logs
          </p>
          <p className="text-blue-400 font-semibold">
            {logs.length}
          </p>
        </div>

        <div className="bg-slate-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">
            Warnings
          </p>
          <p className="text-red-400 font-semibold">
            {logs.filter(l => l.status === "warning").length}
          </p>
        </div>

        <div className="bg-slate-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">
            Active Systems
          </p>
          <p className="text-green-400 font-semibold">
            5
          </p>
        </div>

      </div>

    </div>
  );
};

export default LogsPanel;
