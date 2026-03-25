import React, { useEffect, useState } from "react";

const AlertsPanel = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    generateMockAlerts();
  }, []);

  const alertTypes = [
    {
      type: "Multiple Face Detected",
      severity: "High",
    },
    {
      type: "Student Looking Away",
      severity: "Medium",
    },
    {
      type: "Voice Detected",
      severity: "High",
    },
    {
      type: "Seat Swap Detected",
      severity: "Critical",
    },
    {
      type: "Unauthorized Movement",
      severity: "Medium",
    },
    {
      type: "Student Not Visible",
      severity: "High",
    },
  ];

  const generateMockAlerts = () => {
    setInterval(() => {
      const randomAlert =
        alertTypes[Math.floor(Math.random() * alertTypes.length)];

      const newAlert = {
        id: Date.now(),
        message: randomAlert.type,
        severity: randomAlert.severity,
        time: new Date().toLocaleTimeString(),
      };

      setAlerts((prev) => [newAlert, ...prev.slice(0, 7)]);
    }, 5000);
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "Critical":
        return "bg-red-700";
      case "High":
        return "bg-red-500";
      case "Medium":
        return "bg-yellow-500";
      default:
        return "bg-green-500";
    }
  };

  return (
    <div className="bg-slate-900 rounded-2xl shadow-lg p-4 text-white">

      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">
          AI Alerts & Suspicious Activity
        </h2>

        <div className="bg-red-600 px-3 py-1 rounded-full text-sm">
          Live Alerts
        </div>
      </div>

      {/* Alerts List */}
      <div className="space-y-3 max-h-64 overflow-y-auto">

        {alerts.length === 0 ? (
          <p className="text-gray-400 text-sm">
            No alerts detected yet...
          </p>
        ) : (
          alerts.map((alert) => (
            <div
              key={alert.id}
              className="bg-slate-800 p-3 rounded-lg flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">
                  {alert.message}
                </p>

                <p className="text-xs text-gray-400">
                  {alert.time}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded text-xs ${getSeverityColor(
                  alert.severity
                )}`}
              >
                {alert.severity}
              </span>
            </div>
          ))
        )}
      </div>

      {/* Proctor Notification */}
      <div className="mt-4 bg-slate-800 p-3 rounded-lg">

        <p className="text-sm text-gray-400">
          Proctor Notification
        </p>

        <p className="text-green-400 font-semibold">
          Auto Alert Enabled
        </p>

      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-3 gap-3 mt-4 text-center">

        <div className="bg-slate-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">
            Critical
          </p>
          <p className="text-red-500 font-semibold">
            {alerts.filter(a => a.severity === "Critical").length}
          </p>
        </div>

        <div className="bg-slate-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">
            High
          </p>
          <p className="text-red-400 font-semibold">
            {alerts.filter(a => a.severity === "High").length}
          </p>
        </div>

        <div className="bg-slate-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">
            Medium
          </p>
          <p className="text-yellow-400 font-semibold">
            {alerts.filter(a => a.severity === "Medium").length}
          </p>
        </div>

      </div>
    </div>
  );
};

export default AlertsPanel;
