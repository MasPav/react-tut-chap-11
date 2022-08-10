/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': '#AA336A',
        'accent': 'rgb(248, 117, 123)'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
