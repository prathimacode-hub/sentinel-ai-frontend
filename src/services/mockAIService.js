// src/services/mockAIService.js

/**
 * Mock AI Service
 * Simulates AI-based proctoring detections for PoC demonstration
 * No backend required — generates real-time fake AI data
 */

class MockAIService {
  constructor() {
    this.students = [];
    this.alerts = [];
    this.logs = [];
    this.evidence = [];
  }

  // Generate 30 students
  generateStudents() {
    this.students = Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      name: `Student ${i + 1}`,
      seat: `A${i + 1}`,
      faceDetected: true,
      gaze: "Normal",
      audio: "Silent",
      status: "Normal",
      flagged: false,
    }));

    return this.students;
  }

  // Simulate AI monitoring
  simulateAIActivity() {
    setInterval(() => {
      const studentIndex = Math.floor(Math.random() * this.students.length);
      const student = this.students[studentIndex];

      const anomalyTypes = [
        "Face Missing",
        "Multiple Faces",
        "Looking Away",
        "Talking Detected",
        "Seat Swap",
        "Unauthorized Material",
        "Suspicious Movement",
      ];

      const anomaly =
        anomalyTypes[Math.floor(Math.random() * anomalyTypes.length)];

      // Update student
      student.flagged = true;
      student.status = "Warning";

      if (anomaly === "Face Missing") {
        student.faceDetected = false;
      }

      if (anomaly === "Looking Away") {
        student.gaze = "Looking Away";
      }

      if (anomaly === "Talking Detected") {
        student.audio = "Talking";
      }

      // Create alert
      const alert = {
        id: Date.now(),
        student: student.name,
        seat: student.seat,
        type: anomaly,
        time: new Date().toLocaleTimeString(),
      };

      this.alerts.unshift(alert);

      // Create log
      this.logs.unshift({
        id: Date.now(),
        message: `${student.name} - ${anomaly}`,
        time: new Date().toLocaleTimeString(),
      });

      // Create evidence
      this.evidence.unshift({
        id: Date.now(),
        student: student.name,
        type: anomaly,
        time: new Date().toLocaleTimeString(),
        snapshot: "snapshot.png",
      });

      // Keep list small
      if (this.alerts.length > 10) this.alerts.pop();
      if (this.logs.length > 20) this.logs.pop();
      if (this.evidence.length > 10) this.evidence.pop();

    }, 4000);
  }

  // Simulate CCTV anomalies
  simulateCCTV() {
    setInterval(() => {
      const events = [
        "Crowd Movement Detected",
        "Seat Swap Detected",
        "Unknown Person Entered",
        "Suspicious Hall Activity",
      ];

      const event =
        events[Math.floor(Math.random() * events.length)];

      this.logs.unshift({
        id: Date.now(),
        message: `CCTV: ${event}`,
        time: new Date().toLocaleTimeString(),
      });

      if (this.logs.length > 20) this.logs.pop();
    }, 6000);
  }

  // Simulate audio alerts
  simulateAudio() {
    setInterval(() => {
      const sounds = [
        "Background Talking",
        "Whispering Detected",
        "Phone Ring",
        "Noise Spike",
      ];

      const sound =
        sounds[Math.floor(Math.random() * sounds.length)];

      this.logs.unshift({
        id: Date.now(),
        message: `Audio: ${sound}`,
        time: new Date().toLocaleTimeString(),
      });

      if (this.logs.length > 20) this.logs.pop();
    }, 5000);
  }

  getStudents() {
    return this.students;
  }

  getAlerts() {
    return this.alerts;
  }

  getLogs() {
    return this.logs;
  }

  getEvidence() {
    return this.evidence;
  }
}

const mockAIService = new MockAIService();

export default mockAIService;
