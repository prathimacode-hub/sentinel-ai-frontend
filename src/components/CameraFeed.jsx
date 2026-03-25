import React, { useEffect, useRef, useState } from "react";

const CameraFeed = () => {
  const videoRef = useRef(null);

  const [aiStatus, setAiStatus] = useState("Initializing...");
  const [faceDetected, setFaceDetected] = useState(true);
  const [gazeStatus, setGazeStatus] = useState("Normal");
  const [alert, setAlert] = useState(null);
  const [recording, setRecording] = useState(true);

  // Start webcam
  useEffect(() => {
    startCamera();
    simulateAI();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setAiStatus("AI Monitoring Active");
    } catch (error) {
      console.error("Camera access error:", error);
      setAiStatus("Camera Access Denied");
    }
  };

  // Simulate AI Detection
  const simulateAI = () => {
    setInterval(() => {
      const random = Math.floor(Math.random() * 5);

      switch (random) {
        case 0:
          setFaceDetected(true);
          setGazeStatus("Normal");
          setAlert(null);
          break;

        case 1:
          setFaceDetected(true);
          setGazeStatus("Looking Away");
          setAlert("Gaze Deviation Detected");
          break;

        case 2:
          setFaceDetected(false);
          setAlert("Student Not Visible");
          break;

        case 3:
          setFaceDetected(true);
          setAlert("Multiple Face Detected");
          break;

        case 4:
          setFaceDetected(true);
          setGazeStatus("Suspicious");
          setAlert("Head Movement Detected");
          break;

        default:
          break;
      }
    }, 5000);
  };

  return (
    <div className="bg-slate-900 rounded-2xl shadow-lg p-4 text-white">

      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">
          Laptop Camera Feed
        </h2>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
          <span className="text-sm">Recording</span>
        </div>
      </div>

      {/* Video */}
      <div className="relative">
        <video
          ref={videoRef}
          autoPlay
          muted
          className="rounded-xl w-full h-64 object-cover bg-black"
        />

        {/* AI Status Overlay */}
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 px-3 py-1 rounded text-xs">
          {aiStatus}
        </div>

        {/* Face Status */}
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-3 py-1 rounded text-xs">
          Face: {faceDetected ? "Detected" : "Not Detected"}
        </div>

        {/* Gaze Status */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-3 py-1 rounded text-xs">
          Gaze: {gazeStatus}
        </div>
      </div>

      {/* Alert Panel */}
      {alert && (
        <div className="mt-3 bg-red-600 p-3 rounded-lg">
          ⚠️ {alert}
        </div>
      )}

      {/* AI Indicators */}
      <div className="grid grid-cols-3 gap-3 mt-4 text-center">

        <div className="bg-slate-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">Face Detection</p>
          <p className="text-green-400 font-semibold">
            {faceDetected ? "Active" : "Lost"}
          </p>
        </div>

        <div className="bg-slate-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">Gaze Tracking</p>
          <p className="text-blue-400 font-semibold">
            {gazeStatus}
          </p>
        </div>

        <div className="bg-slate-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">AI Status</p>
          <p className="text-green-400 font-semibold">
            Running
          </p>
        </div>

      </div>
    </div>
  );
};

export default CameraFeed;
