/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [ require("daisyui") ],
  theme: {
    extend: {
      colors: {
        'primary': '#B88E2F',
        'primary-light': '#FFF3E3',
        'heading': '#333333',
        'sub-heading': '#9F9F9F',
        'title': '#3A3A3A',
        'sub-title': '#898989',
        'old': '#B0B0B0',
        'body': '#666666',
      },
      fontFamily: {
        'montserrat': "'Montserrat', sans-serif",
        'poppins': "'Poppins', sans-serif"
      }
    },
  },
}

