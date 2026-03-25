// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    port: 5173,
    open: true,        // Automatically opens browser
    host: true         // Allows access from local network
  },

  preview: {
    port: 5173,
    open: true
  },

  build: {
    outDir: "dist",
    sourcemap: false
  }
});
