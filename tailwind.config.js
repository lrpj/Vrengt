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
     },
     spacing: {
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      },
  },
  plugins: [],
}
}