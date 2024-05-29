/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
],
  theme: {
    extend: {
      colors: {
        primary: "#C87137",
        secondary: "#E6B46B",
        tertiary: "#000000",
        quaternary: "#F5F946",
        quinary: "#38761d",
      },
      fontFamily: {
        sans: ['Patrick Hand', 'sans-serif'],
      },
      fontSize :{
        'h1': '2.5rem',
        'h2': '2rem',
      }
    }
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
}
