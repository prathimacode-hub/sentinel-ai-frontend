import React from "react";

const StudentCard = ({
  studentName = "Student",
  seatNumber = "A1",
  status = "Normal",
  faceDetected = true,
  gaze = "Normal",
  flagged = false,
}) => {
  const getStatusColor = () => {
    if (flagged) return "border-red-500";
    if (status === "Warning") return "border-yellow-500";
    return "border-green-500";
  };

  const getBadgeColor = () => {
    if (flagged) return "bg-red-600";
    if (status === "Warning") return "bg-yellow-500";
    return "bg-green-600";
  };

  return (
    <div
      className={`bg-slate-900 text-white rounded-xl shadow-md p-4 border-2 ${getStatusColor()} transition hover:scale-105`}
    >
  
      {/* Student Image */}
<div className="flex justify-center mb-3">
  <img
    src="/assets/student.jpg"
    alt="student"
    className="w-16 h-16 rounded-full object-cover border-2 border-slate-600"
  />
</div>

      {/* Student Info */}
      <div className="text-center">
        <h3 className="font-semibold text-sm">
          {studentName}
        </h3>

        <p className="text-xs text-gray-400">
          Seat: {seatNumber}
        </p>
      </div>

      {/* Status Badge */}
      <div className="flex justify-center mt-2">
        <span
          className={`px-3 py-1 text-xs rounded-full ${getBadgeColor()}`}
        >
          {flagged ? "Flagged" : status}
        </span>
      </div>

      {/* AI Indicators */}
      <div className="grid grid-cols-2 gap-2 mt-3 text-center text-xs">

        <div className="bg-slate-800 p-2 rounded">
          <p className="text-gray-400">Face</p>
          <p
            className={`font-semibold ${
              faceDetected ? "text-green-400" : "text-red-400"
            }`}
          >
            {faceDetected ? "Detected" : "Missing"}
          </p>
        </div>

        <div className="bg-slate-800 p-2 rounded">
          <p className="text-gray-400">Gaze</p>
          <p
            className={`font-semibold ${
              gaze === "Normal" ? "text-green-400" : "text-red-400"
            }`}
          >
            {gaze}
          </p>
        </div>

      </div>

      {/* Alert */}
      {flagged && (
        <div className="mt-3 bg-red-600 p-2 rounded text-xs text-center">
          ⚠️ Suspicious Activity
        </div>
      )}
    </div>
  );
};

export default StudentCard;
