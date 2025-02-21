/** @type {import('tailwindcss').Config} */
import scrollbarHide from "tailwind-scrollbar-hide";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      screens: {
        "2xl-custom": "1440px", // Custom screen for 1440px
      },
    },
  },
  plugins: [scrollbarHide],
};
