const tailwindcss = require('tailwindcss/colors')

const colors = require(tailwindcss)

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      colors: {
        gray: 'colors.coolGray',
        blue: 'colors.lightBlue',
        red: 'colors.rose',
        pink: 'colors.fuchsia',
      },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [    require('@tailwindcss/forms'),
  require('@tailwindcss/aspect-ratio'),
  require('@tailwindcss/typography'),
  require('tailwindcss-children'),
],
}
