import React, { useEffect, useState } from "react";
import StudentCard from "../components/StudentCard";
import { useNavigate } from "react-router-dom";

const ExamHall = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [alerts, setAlerts] = useState(0);
  const [monitoringStatus, setMonitoringStatus] = useState("Running");

  useEffect(() => {
    generateStudents();
    simulateAlerts();
  }, []);

  // Generate 30 students
  const generateStudents = () => {
    const studentList = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      name: `Student ${i + 1}`,
      seat: `A${i + 1}`,
      faceDetected: Math.random() > 0.1,
      gaze: Math.random() > 0.8 ? "Looking Away" : "Normal",
      flagged: Math.random() > 0.85,
      status: Math.random() > 0.85 ? "Warning" : "Normal",
    }));

    setStudents(studentList);
  };

  // Simulate alerts
  const simulateAlerts = () => {
    setInterval(() => {
      setAlerts(Math.floor(Math.random() * 10));
    }, 5000);
  };

  return (
    <div className="p-6 text-white">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">
            Exam Hall Monitoring
          </h1>
          <p className="text-gray-400">
            AI Supervised Examination Environment
          </p>
        </div>

        <button
          onClick={() => navigate("/live-monitoring")}
          className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Go to Live Monitoring
        </button>
      </div>

      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

        <div className="bg-slate-900 p-5 rounded-xl">
          <p className="text-gray-400">Total Students</p>
          <h2 className="text-2xl text-blue-400 font-bold">
            30
          </h2>
        </div>

        <div className="bg-slate-900 p-5 rounded-xl">
          <p className="text-gray-400">AI Alerts</p>
          <h2 className="text-2xl text-red-400 font-bold">
            {alerts}
          </h2>
        </div>

        <div className="bg-slate-900 p-5 rounded-xl">
          <p className="text-gray-400">Monitoring Status</p>
          <h2 className="text-2xl text-green-400 font-bold">
            {monitoringStatus}
          </h2>
        </div>

      </div>

      {/* CCTV Overview */}
      <div className="bg-slate-900 p-6 rounded-xl mb-6">

        <h2 className="text-lg font-semibold mb-3">
          CCTV Overview
        </h2>

        <div className="bg-black h-48 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">
            CCTV Camera Feed - Exam Hall
          </p>
        </div>

        <p className="text-sm text-gray-400 mt-2">
          AI monitors crowd movement, seat swaps, and unauthorized activity.
        </p>

      </div>

      {/* Student Grid */}
      <div>

        <h2 className="text-lg font-semibold mb-4">
          Student Monitoring Grid
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">

          {students.map((student) => (
            <StudentCard
              key={student.id}
              studentName={student.name}
              seatNumber={student.seat}
              faceDetected={student.faceDetected}
              gaze={student.gaze}
              flagged={student.flagged}
              status={student.status}
            />
          ))}

        </div>

      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        AI Enabled Live Proctoring | Exam Hall Supervision Active
      </div>

    </div>
  );
};

export default ExamHall;
