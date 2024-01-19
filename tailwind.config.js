/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#F0ECE5',
        'secondary':'#B6BBC4',
        'extra':'#31304D',
        'background':'#161A30'
      },
      fontFamily:{
        'poppins':'Poppins'
      }
    },
  },
  plugins: [],
}