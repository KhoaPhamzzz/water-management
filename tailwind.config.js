/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        CustomBlue1: "#3c7c99",
        CustomBlue2: "#20526b",
        CustomBlue3: "#13465d",
        CustomBlue1Dark: "#061d2c",
        CustomBlue2Dark: "#11374a",
        CustomBlue3Dark: "#0e3344",
      },
      fontFamily: {
        rubikWetPaint: ['"Rubik Wet Paint"', "cursive"], // Add Rubik Wet Paint font family
        roboto: ["Roboto", "sans-serif"], // Add Roboto font
      },
    },
  },
  plugins: [],
};
