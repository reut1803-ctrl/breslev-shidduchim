/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF6EA",
        blush: "#F3E9C7",
        rose: "#BF9B30",
        roseDark: "#8A6D1F",
        sand: "#EAE0C3",
        ink: "#4A4039",
      },
      fontFamily: {
        sans: ["Heebo", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(138, 109, 31, 0.08)",
      },
    },
  },
  plugins: [],
};
