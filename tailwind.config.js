/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   
    extend: {
      fontFamily: {
        Open: ["Open Sans", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        'header-bg': "url('/images/header_bg.png')",
        'what-we-are-bringing-section': "url('/images/what-are-we-bringing.png')",
      },
      colors: {
        primary: '#223A57',
        "white-1": '#FFFFFF',
        positive: '#0EAD69',
        "grey-1": '#959595',
      },
    },
  },
  plugins: [],
}