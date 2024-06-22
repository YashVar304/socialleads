/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        roboto : ['Roboto Condensed', 'sans-serif'],
        Popins : ['Poppins', 'sans-serif'],
        playwrite: ['Playwrite TZ', 'sans-serif']
      },

      animation: {
        fadeInLeft: 'fadeInLeft 1s ease-out',
        fadeInRight: 'fadeInRight 1s ease-out',
        zoomIn: 'zoomIn 1s ease-out',
      },
      keyframes: {
        fadeInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeInRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        zoomIn: {
          '0%': { transform: 'scale(0)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
    },
  },
  plugins: [require('tailgrids/plugin')],
}