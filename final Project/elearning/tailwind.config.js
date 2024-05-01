/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./App.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      primaryBlack: '#212236',
      secondaryBlack: '#1A1A1A',
      blue1: '#F5F7FB',
      blue2: '#84E9F4',
      violet1: '#726AEC',
      violet2: '#51459F',
      violet3: '#3935AB',
      red1: '#DE3730',
      red2: '#E02B1D',
      grey1: '#EAEAEA',
      grey2: '#A6A5A5',
      grey3: '#747474',
      grey4: '#676767',
      grey5: '#4E4E4E',
      yellow: '#FDBB64',
      white: '#FFFFFF',
    },
    extend: {
      fontSize: {
        h1: '30px',
        h2: '23px',
        h3: '18px',
        h4: '16px',
        h5: '14px',
      },
      fontFamily: {
        sans: ['DMSans-Regular', 'Arial', 'sans-serif'],
        bold: ['DMSans-Bold', 'Arial', 'sans-serif'],
        italic: ['DMSans-Black', 'Arial', 'sans-serif'],
        light: ['DMSans-Light', 'Arial', 'sans-serif'],
        quanticoBold: ['Quantico-Bold', 'Arial', 'sans-serif'],
        quanticoRegular: ['Quantico-Regular', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}