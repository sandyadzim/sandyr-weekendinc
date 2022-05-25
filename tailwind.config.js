module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-weekend': '#0B24FB',
        'pink-weekend': '#EEBECE'
      }
    },
    fontFamily: {
      worksans: ["Work Sans", "sans-serif"],
    },
  },
  plugins: [],
}
