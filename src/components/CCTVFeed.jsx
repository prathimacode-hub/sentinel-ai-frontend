import React, { useEffect, useState } from "react";

const CCTVFeed = () => {
  const [studentsVisible, setStudentsVisible] = useState(30);
  const [alert, setAlert] = useState(null);
  const [motionStatus, setMotionStatus] = useState("Normal");
  const [seatSwap, setSeatSwap] = useState(false);
  const [aiStatus, setAiStatus] = useState("AI Monitoring Active");

  useEffect(() => {
    simulateCCTVAI();
  }, []);

  const simulateCCTVAI = () => {
    setInterval(() => {
      const random = Math.floor(Math.random() * 6);

      switch (random) {
        case 0:
          setStudentsVisible(30);
          setMotionStatus("Normal");
          setSeatSwap(false);
          setAlert(null);
          break;

        case 1:
          setStudentsVisible(29);
          setAlert("Student Missing from Seat");
          break;

        case 2:
          setMotionStatus("Suspicious Movement");
          setAlert("Unauthorized Movement Detected");
          break;

        case 3:
          setSeatSwap(true);
          setAlert("Seat Swap Detected");
          break;

        case 4:
          setStudentsVisible(31);
          setAlert("Extra Person Detected in Hall");
          break;

        case 5:
          setMotionStatus("High Activity");
          setAlert("Multiple Suspicious Movements");
          break;

        default:
          break;
      }
    }, 6000);
  };

  return (
    <div className="bg-slate-900 rounded-2xl shadow-lg p-4 text-white">

      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">
          CCTV Exam Hall Monitoring
        </h2>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm">Live CCTV</span>
        </div>
      </div>

      {/* CCTV Feed */}
      <div className="relative bg-black rounded-xl h-64 flex items-center justify-center">

        <span className="text-gray-500">
          CCTV Camera Feed (Exam Hall Simulation)
        </span>

        {/* AI Status */}
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 px-3 py-1 rounded text-xs">
          {aiStatus}
        </div>

        {/* Students Count */}
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-3 py-1 rounded text-xs">
          Students Visible: {studentsVisible}
        </div>

        {/* Motion */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-3 py-1 rounded text-xs">
          Motion: {motionStatus}
        </div>

      </div>

      {/* Alert Panel */}
      {alert && (
        <div className="mt-3 bg-red-600 p-3 rounded-lg">
          ⚠️ {alert}
        </div>
      )}

      {/* CCTV Analytics */}
      <div className="grid grid-cols-3 gap-3 mt-4 text-center">

        <div className="bg-slate-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">
            Students Count
          </p>
          <p className="text-green-400 font-semibold">
            {studentsVisible}/30
          </p>
        </div>

        <div className="bg-slate-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">
            Motion Detection
          </p>
          <p className="text-blue-400 font-semibold">
            {motionStatus}
          </p>
        </div>

        <div className="bg-slate-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">
            Seat Swap Detection
          </p>
          <p className={`font-semibold ${seatSwap ? "text-red-400" : "text-green-400"}`}>
            {seatSwap ? "Detected" : "Normal"}
          </p>
        </div>

      </div>

      {/* Additional AI Indicators */}
      <div className="grid grid-cols-2 gap-3 mt-3 text-center">

        <div className="bg-slate-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">
            Face Recognition
          </p>
          <p className="text-green-400 font-semibold">
            Active
          </p>
        </div>

        <div className="bg-slate-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">
            Crowd Monitoring
          </p>
          <p className="text-green-400 font-semibold">
            Running
          </p>
        </div>

      </div>
    </div>
  );
};

export default CCTVFeed;
