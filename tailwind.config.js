/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
    "node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        gmarket: ["gmarket"],
        Pretendard : ["Pretendard"],
        sans: ["'Noto Sans'", ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      xs: { max: "767px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [require("preline/plugin"), require("flowbite/plugin")],
};
