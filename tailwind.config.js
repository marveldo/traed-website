/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans: ['Inter', 'Open Sans', 'sans-serif'],
        dmSans: ['DM Sans', 'sans-serif'],
       },
       animation :{
        slidein : 'slidein 0.3s ease-in-out', 
        slideup : 'SlideUp 0.5s ease-out',
        fadeout : 'FadeOut 0.3s ease-out'
       },
       colors : {
        'custom-rgba':  'rgba(126, 134, 147, 0.1)',
        'another-rgba': 'rgba(0, 0, 0, 0.5)',
        'another-one': 'rgba(35, 33, 59, 1)',
        'primary': 'rgba(6, 186, 99, 1)',
        'secondary-accient':  'rgba(54, 69, 72, 1)',
        'main' : 'rgba(12, 32, 39, 1)',
       },
       keyframes : {
        slidein:{
          '0%' : { transform: 'translateX(90%)'},
         '100%': { transform: 'translateX(0)' }
       },
       SlideUp : {
        '0%' : {transform : 'translateY(90%)'},
        '100%': { transform: 'translateY(0)' }
       },
       
       FadeOut :{
        '0%': {opacity : 0},
        '100%': {opacity : 1}
       }
       }
    },
  },
  plugins: [],
}

