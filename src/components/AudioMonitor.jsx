import React, { useEffect, useRef, useState } from "react";

const AudioMonitor = () => {
  const [audioStatus, setAudioStatus] = useState("Initializing...");
  const [noiseLevel, setNoiseLevel] = useState(10);
  const [alert, setAlert] = useState(null);
  const [speechDetected, setSpeechDetected] = useState(false);
  const [micActive, setMicActive] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    startMicrophone();
    simulateAudioAI();
  }, []);

  // Start microphone
  const startMicrophone = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      if (audioRef.current) {
        audioRef.current.srcObject = stream;
      }

      setMicActive(true);
      setAudioStatus("Audio Monitoring Active");
    } catch (error) {
      console.error("Microphone access denied", error);
      setAudioStatus("Microphone Access Denied");
    }
  };

  // Simulate AI audio detection
  const simulateAudioAI = () => {
    setInterval(() => {
      const randomNoise = Math.floor(Math.random() * 100);
      setNoiseLevel(randomNoise);

      if (randomNoise < 30) {
        setSpeechDetected(false);
        setAlert(null);
      }

      if (randomNoise >= 30 && randomNoise < 60) {
        setSpeechDetected(true);
        setAlert("Background Noise Detected");
      }

      if (randomNoise >= 60 && randomNoise < 80) {
        setSpeechDetected(true);
        setAlert("Suspicious Conversation Detected");
      }

      if (randomNoise >= 80) {
        setSpeechDetected(true);
        setAlert("Multiple Voices Detected");
      }
    }, 4000);
  };

  return (
    <div className="bg-slate-900 rounded-2xl shadow-lg p-4 text-white">

      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">
          Audio Monitoring System
        </h2>

        <div className="flex items-center gap-2">
          <span
            className={`h-3 w-3 rounded-full ${
              micActive ? "bg-green-500 animate-pulse" : "bg-red-500"
            }`}
          ></span>
          <span className="text-sm">
            {micActive ? "Mic Active" : "Mic Off"}
          </span>
        </div>
      </div>

      {/* Audio Visualizer */}
      <div className="bg-black rounded-xl h-40 flex flex-col justify-center items-center">

        <p className="text-gray-500">
          Microphone Audio Stream
        </p>

        <div className="w-full px-6 mt-4">
          <div className="bg-gray-700 h-3 rounded">
            <div
              className={`h-3 rounded ${
                noiseLevel < 30
                  ? "bg-green-500"
                  : noiseLevel < 60
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
              style={{ width: `${noiseLevel}%` }}
            ></div>
          </div>
        </div>

        <p className="text-sm mt-2">
          Noise Level: {noiseLevel}%
        </p>
      </div>

      {/* AI Status */}
      <div className="mt-3 bg-slate-800 p-3 rounded-lg">
        <p className="text-sm text-gray-400">
          AI Status
        </p>
        <p className="text-green-400 font-semibold">
          {audioStatus}
        </p>
      </div>

      {/* Alert Panel */}
      {alert && (
        <div className="mt-3 bg-red-600 p-3 rounded-lg">
          ⚠️ {alert}
        </div>
      )}

      {/* Audio Analytics */}
      <div className="grid grid-cols-3 gap-3 mt-4 text-center">

        <div className="bg-slate-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">
            Speech Detection
          </p>
          <p
            className={`font-semibold ${
              speechDetected ? "text-red-400" : "text-green-400"
            }`}
          >
            {speechDetected ? "Detected" : "Normal"}
          </p>
        </div>

        <div className="bg-slate-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">
            Noise Analysis
          </p>
          <p className="text-blue-400 font-semibold">
            Running
          </p>
        </div>

        <div className="bg-slate-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">
            Voice Detection
          </p>
          <p className="text-green-400 font-semibold">
            Active
          </p>
        </div>

      </div>
    </div>
  );
};

export default AudioMonitor;
