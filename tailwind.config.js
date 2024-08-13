/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "loop-scrol": "loop-scroll 100s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        blk: "#0B0B0C",
        wht: "#f1f1f1",
        primary: "#4CA92B",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
    },
  },
  plugins: [],
};
