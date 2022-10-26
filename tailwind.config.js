/** @type {import('tailwindcss').Config} */
module.exports = {
     content: ["./index.html", "./src/**/*.{js,jsx}"],
     darkMode: 'class',
     theme: {
          container: {
               center: true,
               padding: '1em',
          },
          fontFamily: {
               sans: "Roboto Flex, sans-serif",
               serif: "Playfair Display, serif"
          },
          extend: {
               backgroundImage: {
                    'kitchen': "url('./images/hero/category-kitchen_cabinetry.jpg')",
                    'bathroom': "url('./images/hero/category-bathroom_cabinetry.jpg')",
                    'home-office': "url('./images/hero/category-home_office_cabinetry.jpg')",
                    'laundry-room': "url('./images/hero/category-laundry_room_cabinetry.jpg')",
                    'refacing-and-refinishing': "url('./images/hero/category-refacing_and_refinishing.jpg')",
               },
               screens: {
                    'short': { 'raw': '(max-height: 725px)' },
                    'sm': '576px'
               },
               colors: {
                    'gold': '#c5a47e',
                    'gray-darker': '#262626',
                    'gray-dark': '#404040',
                    'gray-light': '#e5e5e5',
                    'gray-lighter': '#f5f5f5',
               }
          },
     },
     plugins: [
          require('@tailwindcss/forms'),
     ],
};