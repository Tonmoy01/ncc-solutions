/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#2C3E50',
        secondaryColor: '#205C9E',
        btnYellow: '#EAC94A',
        textBlue: '#1D6AB8',
        textGray: '#2c3e50',
        bgGray: '#CCD0D4',
      },
      fontFamily: {
        lato: 'Lato',
        montserrat: 'Montserrat',
      },
    },
  },
  plugins: [],
};
