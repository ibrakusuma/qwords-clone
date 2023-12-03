/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },

    extend: {
      colors: {
        'primary': '#FF6D0B',
        'accent': '#cf3b21',
        'dark': '#212529',
        'pink': '#fff8f3',
        'darkpink': '#feecdd',
      },
      boxShadow: {
        'lg': '0 0 2rem rgba(0,0,0,.175)',
      },
      content: {
        'cite': "url(../../public/assets/testimonial/cite.png)",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

