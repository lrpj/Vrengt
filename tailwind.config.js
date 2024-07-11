/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      BackgroundImage: {
        'main':"url('/src/texture.png')",
      },
      margin: {
        '5px': '5px',
      },
      fontFamily: {
        'dm': ['"DM Serif Text"', "sans-serif"]
     },
     colors: {
      primary: '#f1dfc9',
      secondary: 'ebbb75'
     },
      screens: {
        'sm': '576px',
        'md': '960px',
        'lg': '1440px',
      },
  },
  plugins: [],
}
}