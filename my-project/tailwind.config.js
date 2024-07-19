/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx}",
    './components/**/*.{,js,jsx,ts,tsx}',
  ],
  theme: {
    // colors: {
    //   'blue': '#1fb6ff',
    //   'purple': '#7e5bef',
    //   'pink': '#ff49db',
    //   'orange': '#ff7849',
    //   'green': '#13ce66',
    //   'yellow': '#ffc82c',
    //   'gray-dark': '#273444',
    //   'gray': '#8492a6',
    //   'gray-light': '#d3dce6',
      
    // },
    extend: {
      fontFamily: {
        'display': [' sans-serif', 'Open Sans'] // Corrected the syntax for specifying multiple font families
      }
     
    },
  },
  plugins: [],
}

