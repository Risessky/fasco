/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        volkhov: ['var(--font-volkhov)', 'serif'],
      },
      colors : {
        grayLight: '#E0E0E0', 
        grayDark: '#484848', 
      }
    },
  },
  plugins: [],
};
