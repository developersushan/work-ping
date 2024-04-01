/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:"#51d8e2",
        dark:"#28282B",
        textColor:"#ffff"
      }
    },
  },
  plugins: [],
}

