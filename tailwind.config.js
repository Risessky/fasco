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
        digital: ['Digital-7', 'sans-serif'],


      },
      colors : {
        // black:"#000000",
        white:"#ffffff",
        grayLight: '#E0E0E0',
        gray:"#8A8A8A", 
        gray2:"#767676", 
        grayDark: '#484848', 
      },
       backgroundImage: {
        'white-to-lightgray': 'linear-gradient(to bottom, #FFFFFF, #FAFAFA)',
        'red-to-blue': 'linear-gradient(to bottom, #dc2626, #2563eb)',
      }
    },
  },
  plugins: [],
};
