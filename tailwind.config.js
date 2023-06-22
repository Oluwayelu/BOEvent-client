/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      Nunito: ['Nunito', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          100: '#F9F9BF',
          200: '#F6F69A',
          300: '#B2B23B',
          DEFAULT: '#E6E672',
        },
        gray: {
          50: '#FEFEFE',
          100: '#D6D6D0',
          DEFAULT: '#F1F1F1',
        },
        error: {
          100: '#FCA0A0',
          DEFAULT: '#F32B2B',
        },
        dark: '#191902',
        background: '#F1F1F1',
      },
    },
  },
  plugins: [],
};
