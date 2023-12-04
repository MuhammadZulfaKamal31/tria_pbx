/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{vue,js,ts,tsx,jsx}",
    "./components/**/*.{vue,js,ts,tsx,jsx}",
    "./layouts/**/*.{vue,js,ts,tsx,jsx}",
    "./plugins/**/*.{vue,js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ("Inter")
      },
      colors: {
        'btn': '#EAA030',
        'btn1': '#FFC737',
        'btn2': '#F6B816',
        'btn3': '#F4A52F',
        'btn4': '#F6B85A',
        'background': '#FCCA7E',
        'background2': '#FFCD81',
        'background3': '#F2E9E9',
        'background4': '#FFAF51',
        'footer': '#EFAB49',
        'border': '#BA6E00',
        'background': '#FCECB0',
      },
      screens: {
        mobile: '200px',
        tablet: '640px',
        tablet_landscape: '1000px',
        desktop: '1200px'
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
}

