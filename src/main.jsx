// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * Root container
 */
const container = document.getElementById("root");

if (!container) {
  throw new Error(
    "Root container missing in index.html. Please add <div id='root'></div>"
  );
}

/**
 * Create React Root
 */
const root = ReactDOM.createRoot(container);

/**
 * Render Application
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
