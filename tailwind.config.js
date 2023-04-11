/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontWeight: {
      'normal': '400',
      'bold': '600',
      'extraBold': '800',
      'extra-black': '1000'
    },
    extend: {
      fontFamily:{
        'notoSans': ['"Noto Sans"', 'sans-serif'],
        'mulish': ['Mulish', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
