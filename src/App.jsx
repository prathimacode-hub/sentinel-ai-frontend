// src/App.jsx

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import ExamHall from "./pages/ExamHall";
import LiveMonitoring from "./pages/LiveMonitoring";

// Components
import Navbar from "./components/Navbar";

// Mock AI Service
import mockAIService from "./services/mockAIService";

function App() {

  // Initialize mock AI system
  useEffect(() => {
    mockAIService.generateStudents();
    mockAIService.simulateAIActivity();
    mockAIService.simulateCCTV();
    mockAIService.simulateAudio();
  }, []);

  return (
    <Router>

      <div className="min-h-screen bg-slate-950">

        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <div className="pt-2">

          <Routes>

            {/* Dashboard */}
            <Route path="/" element={<Dashboard />} />

            {/* Exam Hall */}
            <Route path="/exam-hall" element={<ExamHall />} />

            {/* Live Monitoring */}
            <Route
              path="/live-monitoring"
              element={<LiveMonitoring />}
            />

          </Routes>

        </div>

      </div>

    </Router>
  );
}

export default App;
