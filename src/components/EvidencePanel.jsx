import React, { useEffect, useState } from "react";

const EvidencePanel = () => {
  const [evidenceList, setEvidenceList] = useState([]);

  useEffect(() => {
    generateMockEvidence();
  }, []);

  const evidenceTypes = [
    {
      type: "Snapshot",
      description: "Multiple Face Detected",
      icon: "📸",
    },
    {
      type: "Video Clip",
      description: "Seat Swap Detected",
      icon: "🎥",
    },
    {
      type: "Audio Clip",
      description: "Suspicious Conversation",
      icon: "🎤",
    },
    {
      type: "Snapshot",
      description: "Student Looking Away",
      icon: "📸",
    },
    {
      type: "Video Clip",
      description: "Unauthorized Movement",
      icon: "🎥",
    },
  ];

  const generateMockEvidence = () => {
    setInterval(() => {
      const randomEvidence =
        evidenceTypes[Math.floor(Math.random() * evidenceTypes.length)];

      const newEvidence = {
        id: Date.now(),
        type: randomEvidence.type,
        description: randomEvidence.description,
        icon: randomEvidence.icon,
        time: new Date().toLocaleTimeString(),
      };

      setEvidenceList((prev) => [newEvidence, ...prev.slice(0, 6)]);
    }, 7000);
  };

  return (
    <div className="bg-slate-900 rounded-2xl shadow-lg p-4 text-white">

      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">
          Evidence Capture System
        </h2>

        <div className="bg-blue-600 px-3 py-1 rounded-full text-sm">
          Secure Storage
        </div>
      </div>

      {/* Evidence List */}
      <div className="space-y-3 max-h-64 overflow-y-auto">

        {evidenceList.length === 0 ? (
          <p className="text-gray-400 text-sm">
            No evidence captured yet...
          </p>
        ) : (
          evidenceList.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800 p-3 rounded-lg flex justify-between items-center"
            >
              <div className="flex items-center gap-3">

                <div className="text-2xl">
                  {item.icon}
                </div>

                <div>
                  <p className="font-semibold">
                    {item.type}
                  </p>

                  <p className="text-xs text-gray-400">
                    {item.description}
                  </p>

                  <p className="text-xs text-gray-500">
                    {item.time}
                  </p>
                </div>

              </div>

              <button className="bg-green-600 px-3 py-1 rounded text-xs hover:bg-green-700">
                View
              </button>
            </div>
          ))
        )}
      </div>

      {/* Storage Info */}
      <div className="mt-4 bg-slate-800 p-3 rounded-lg">

        <p className="text-sm text-gray-400">
          Storage Status
        </p>

        <p className="text-green-400 font-semibold">
          Tamper-Proof Logging Enabled
        </p>

      </div>

      {/* Evidence Summary */}
      <div className="grid grid-cols-3 gap-3 mt-4 text-center">

        <div className="bg-slate-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">
            Snapshots
          </p>
          <p className="text-blue-400 font-semibold">
            {evidenceList.filter(e => e.type === "Snapshot").length}
          </p>
        </div>

        <div className="bg-slate-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">
            Videos
          </p>
          <p className="text-red-400 font-semibold">
            {evidenceList.filter(e => e.type === "Video Clip").length}
          </p>
        </div>

        <div className="bg-slate-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">
            Audio
          </p>
          <p className="text-yellow-400 font-semibold">
            {evidenceList.filter(e => e.type === "Audio Clip").length}
          </p>
        </div>

      </div>
    </div>
  );
};

export default EvidencePanel;
