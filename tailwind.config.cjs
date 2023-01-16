/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "bg-clock": "url('/bg-clock.jpg')",
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
