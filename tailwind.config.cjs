/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "rgba(0, 0, 0, 0.8)",
        secondary: "rgba(233, 233, 233, 0.8)",
        black: "rgba(35, 37, 54, 1)",
        yellow: "rgba(255, 208, 80, 1)",
        white : "rgba(255, 255, 255, 0.8)",
        purple : "rgba(89, 46, 169, 1)",
        red: "rgba(255, 0, 0, 0.1)",
        blue: "rgba(35, 37, 54, 1)",
        gray: "rgba(76, 76, 76, 1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};