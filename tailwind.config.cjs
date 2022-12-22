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
        'snaccent': '#E52229',
        'sn-light': '#FFF4ED',
        'sn-dark': '#1A1A1A'
      },
      fontFamily: {
        'caption': ['PT Serif Caption'],
      },
      boxShadow: {
        'hard': '7px 7px 0 0 hsl(0, 0%, 0%), 14px 14px 0 0 hsl(0, 0%, 10%);'
      }
    },
  },
  plugins: [],
}
