module.exports = {
  content: [
    "./src/App.js",
    "./src/components/Navbar.js",
    "./src/pages/index.js",
    "./src/components/Socmed.js",
    "./src/pages/interest.js",
    "./src/pages/projects.js",
    "./src/components/Footer.js"

  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
        sourceSans: ['Source Sans Pro']
      },
      colors: {
        yellow: '#FBCD09',
        black: '#252328',
        grey: '#C4C4C4',
        silver: '#F9F9F9',
        white: '#FFFFFF',
        darkYellow: '#EEC30C'
      }
    },
  },
  plugins: [],
}
