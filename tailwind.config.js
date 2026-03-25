/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],

  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#0f172a",
        background: "#020617",
        danger: "#dc2626",
        success: "#16a34a",
        warning: "#f59e0b"
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },

      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.4)",
        glow: "0 0 15px rgba(37, 99, 235, 0.5)"
      },

      animation: {
        scan: "scan 2s linear infinite",
        pulseSlow: "pulse 3s infinite"
      },

      keyframes: {
        scan: {
          "0%": { top: "0%" },
          "100%": { top: "100%" }
        }
      },

      borderRadius: {
        xl: "12px",
        "2xl": "16px"
      }
    }
  },

  plugins: []
};
