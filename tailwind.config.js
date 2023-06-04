/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: "#9F1D1F",
      yellow: "#FFBF43",
      bgIcon: "#ECE9FB",
      black: "#000000",
      white: "#ffffff",
      bgSearch: "#F0F2FA",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    minWidth: {
      bgImg: "23em",
      card: "13em",
    },
    width: {
      search: "30em",
      card: "13em",
      cardxl: "20em",
    },
    minHeight: {
      card: "15em",
      cardmd: "13em",
    },
    maxWidth: {
      citation: "37em",
      button: "10em",
      card: "20em",
      full: "100%",
      sm: "40em",
    },
    maxHeight: {
      citation: "30em",
      card: "15em",
    },
    extend: {
      gridTemplateColumns: {
        holdings: "24em 45em",
        citation: "45em 45em",
      },
    },
  },
  plugins: [],
};