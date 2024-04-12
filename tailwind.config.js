/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'backgroundGradient' : 'linear-gradient(157deg, #E6EEFF 28.87%, rgba(230, 238, 255, 0.00) 103.1%)',
        'botMessageGradient' : 'linear-gradient(100deg, #E5EEFF 13.91%, #FFF 116.73%)',
        'suggestionGradient' : 'linear-gradient(115deg, #E5EEFF 34.14%, #FAFCFF 105.26%)',
        'textbarGradient' : ' linear-gradient(100deg, #EFF3FD 33.17%, rgba(239, 243, 253, 0.00) 122.24%)',
      },
      boxShadow : {
        'topbarShadow' : '0px 1px 4px 0px rgba(0, 0, 0, 0.25)'
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      colors : {
        'textBlue' : '#4C82EF',
        'green' : '#3FE225',
        'userMessageBg' : '#DCF7C5'

      }
    },
  },
  plugins: [],
}

