// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A4A6A5",
        secondary: "#262626",
        accent: "#727372",
        font: {
          white: "#F2F2F2",
          black: "#0D0D0D",
        },
      },
    },
  },
  plugins: [],
};
