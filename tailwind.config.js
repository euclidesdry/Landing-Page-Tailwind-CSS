module.exports = {
  content: [
    './public/index.html',
  ],
  theme: {
    extend: {},
    colors: {
      "bookmark-purple": "#5267DF",
      "bookmark-red": "#FA5959",
      "bookmark-orange": "#F28705",	
      "bookmark-blue": "#242A45",
      "bookmark-gray": "#9194A2",
      "bookmark-white": "#F7F7F7",
      "white": "#FFFFFF",
      "black": "#222222",
      "pallet-orange-light": "#F2CB05",
      "pallet-orange-neutral": "#F2B705",
      "pallet-orange": "#F28705",
      "pallet-orange-dark": "#F25C05",
      "pallet-dark": "#0D0D0D",
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
