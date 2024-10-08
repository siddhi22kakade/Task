/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'], // Adjust this to your file structure
  theme: {
    extend: {
       colors:{
        blue: {
          500: '#1D4ED8'
       },
    },
  },
  plugins: [],
}

};