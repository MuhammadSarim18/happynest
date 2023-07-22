/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // primary:'#F5385D',
        primary:'#3658f3',
        bggallery:'#2580f3',
        bghover:'#fbfbfc',
        // primary:'#13c3fb',
        // primary:'#1d9bf7',
      }
    },
  },
  plugins: [],
}
