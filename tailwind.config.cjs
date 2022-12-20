/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,svelte,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px'
      },
      colors: {
        'snaccent': '#E52229'
      },
      fontFamily: {
        'caption': ['PT Serif Caption'],
      }
    },
  },
  plugins: [],
}
