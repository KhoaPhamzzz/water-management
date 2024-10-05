/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        CustomBlue1: "#092e3f",
        CustomBlue2: "#164a64",
        CustomBlue3: "#13465d",
        // Darker shades for hover effect
        CustomBlue1Dark: "#061d2c",
        CustomBlue2Dark: "#11374a",
        CustomBlue3Dark: "#0e3344",
      },
    },
  },
  plugins: [],
};
