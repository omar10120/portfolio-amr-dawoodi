/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),


  ],
  theme: {
    container: {
    padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem',
    },
  },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'about-grey': '#E6E8EB',
        'about-body-grey': '#FAF9FC',
        'customegrey' : '#cbd5e1',
        'red':'red' ,
        'yellow': 'yellow',
        'dark': '#111827', // Define custom dark mode background
        'darker': '#030712', // Define custom light mode background
        'tags': '#374151', // Define custom light mode background

        boxShadow:{
            // '3x1' : '25px 20px  #E6E8EB'
            '4xl': '25px 20px  #E6E8EB',
        },
        
      },
      height:{
        '60' : '60vh',
        '120' : '120vh'
      }
    },
  },
  plugins: [  
    flowbite.plugin(),

  ],
  darkMode: ['selector', '[data-mode="dark"]'],
  

  
} 

