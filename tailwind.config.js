/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary' : '#00adef',
        'secondary' : '#033067',
        'action' : '#ffa500'
      },
      boxShadow:{
        'pxl' : '4px 7px 14px 2px #b3b3b3'
      }
    },
  },
  plugins: [],
}

