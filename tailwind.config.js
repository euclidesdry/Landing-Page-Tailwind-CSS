module.exports = {
  content: [
    './public/index.html',
  ],
  theme: {
    extend: {},
    colors: {
      "bookmark-purple": "#5267DF",
      "bookmark-red": "#FA5959",
      "bookmark-blue": "#242A45",
      "bookmark-gray": "#9194A2",
      "bookmark-white": "#FFFFFF",
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    },
  },
  plugins: [],
}
