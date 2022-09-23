/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Firacode: ["Fira Code", "san-serif"],
      },
      colors: {
        gray: {
          200: "#121212",
          400: "#00000",
          800: "#272727",
        },
        blue: {
          400: "#1977f3",
          700: "#1517d",
        },
        indigo: {
          600: "#4c50a9",
        },
        orange: {
          100: "rgb(255 237 213)",
        },
        yellow: {
          600: "#FCB541",
        },
      },
    },
  },
  plugins: [require("preline/plugin")],
};
