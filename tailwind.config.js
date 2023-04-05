/** @type {import('tailwindcss').Config} */
// const theme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
    },
    extend: {},
    colors: {
      "black-primary": "#1C1C1C",
      "black-secondary": "#292828",
      "black-tertiary": "#333131",
      "category-yellow": "#EBA639",
      "yellow-secondary": "#FBBD5A",
      "white": "#FFFFFF",
      "grey": "#EBEBEB",
    },
    fontFamily: {
      
    }
  },
  plugins: [],
}

