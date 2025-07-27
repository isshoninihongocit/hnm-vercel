// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B91C1C", // Deep Red
        secondary: "#1E3A8A", // Indigo Blue
        gold: "#FFD700", // Warm Gold
      },
      fontFamily: {
        nuku: ['"Nuku Nuku"', "cursive"],
        sans: ['"Noto Sans JP"', "sans-serif"],
        hnm: ["HNMFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
