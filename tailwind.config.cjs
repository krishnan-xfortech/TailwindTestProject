/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,vue}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'active': '#242627'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('flowbite/plugin')
  ],
  variants: {
    scrollbar: ['rounded']
  }
}
