/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // It's for Darl and Day Mode
  daisyui: {
    themes: [
      {
        my_theme: {
          primary: "#3b82f6",
          secondary: "#F04A7D",
          accent: "#0F172A",
          info: "#6D28D9",
          neutral: "#e0e0e8",
          warning: "#0F172A",
          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#f0f0f0",
        },
      },
      {
        my_dark: {
          primary: "#3b82f6",
          secondary: "#F04A7D",
          accent: "#0284C7",
          info: "#0284C7",
          neutral: "#282e3f",
          warning: "#E2E8F0",
          "base-100": "#0b1120",
          "base-200": "#0f172a",
          "base-300": "#182233",
        },
      },
      "light",
      "dracula",
    ],
  },
}

