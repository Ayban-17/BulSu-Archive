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
      disabled: "#4A4A4A",
      bgSearch: "#F0F2FA",
      footerbg1: "#363949",
      footerbg2: "#23222F",
      footerText1: "#A3BDCC",
      footerText2: "#DAD8D8",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    minWidth: {
      card: "13em",
    },
    width: {
      search: "30em",
      card: "13em",
      cardxl: "20em",
      full: "100%",
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
      translate: {
        mid: "-50%",
      },
    },
  },
  plugins: [],
};
