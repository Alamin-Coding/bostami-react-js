/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
      },
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'roboto-slab': ['Roboto Slab', 'sans-serif']
    },
    extend: {
      colors: {
        'primary' : '#FA5252',
        'light-gray' : '#F3F6F6',
        'mid-dark' : '#1D1D1D',
      },
      backgroundImage: {
        // 'image-dark': "url('./public/images/bg-image.jpg')",
        'image-light': "url('./public/images/bg-light.jpg')"
      }
    },
  },
  plugins: [],
}
