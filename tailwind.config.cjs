/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Sk-Modernist': ['Sk-Modernist', 'sans-serif']
      },
      fontSize: {
        'md': '16px'
      },
      colors: {
        'primary': 'rgba(0,0,0,0.7)',
        'red': '#E94057'
      },
      backgroundColor: {
        'thin-gray': 'rgba(255, 255, 255, 0.2)',
        'red': '#E94057'
      },
      borderWidth: {
        '1': '1px'
      },
      borderColor: {
        'thin-gray': '#E8E6EA',
        'red': '#E94057',
      },
      dropShadow: {
        'red': '0 15px 15px rgba(233, 64, 87, 0.2)',
        'gray': '0 20px 50px rgba(0, 0, 0, 0.3)'
      },
      animation: {
        'jump': 'jump 1s linear infinite',
      },
      keyframes: {
        'jump': {
          '0%, 100%, 20%, 50%, 80%': {
            '-webkit-transform': 'translateY(0)',
            '-ms-transform': 'translateY(0)',
            'transform': 'translateY(0)'
          },
          '40%': {
            '-webkit-transform': 'translateY(-30px)',
            '-ms-transform': ' translateY(-30px)',
            'transform': 'translateY(-30px)'
          },
          '60%': {
            '-webkit-transform': 'translateY(-15px)',
            '-ms-transform': 'translateY(-15px)',
            'transform': ' translateY(-15px)'
          }
        }
      }
    },
  },
  plugins: [],
}