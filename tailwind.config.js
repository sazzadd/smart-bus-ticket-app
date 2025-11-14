/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        primary: "#1DD100",  // তোমার কাস্টম color
        secondary: "#0E9F6E",
      },
    },
  },

  plugins: [],
};
