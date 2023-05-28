/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')


export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        
      sans: ["'Noto Sans'", ...defaultTheme.fontFamily.sans],
      
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

