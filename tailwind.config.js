/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#2C3E50',
        secondaryColor: '#205C9E',
        bodyColor: '#f5f5f5',
        btnYellow: '#EAC94A',
        textBlue: '#1D6AB8',
        textBlack: '#212121',
        textGray: '#2c3e50',
        textLightGray: '#666',
        bgGray: '#CCD0D4',
      },
    },
  },
  plugins: [],
};
