/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        regular: '#292e35',
        secondary: '#1e232a',
        'red-100': '#e74c3c',
        'red-200': '#ff0000',
        grey: '#8d9194',
        'dark-100': '#f9f9f9',
        'dark-200': '#cbccce',
        'dark-300': '#eaeaea'
      }
    },
  },
  plugins: [],
}