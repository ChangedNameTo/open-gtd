const tailwindcss = require("tailwindcss");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      listStyleType: ["hover", "focus"],
    },
  },
  variants: {
    extend: {
      ringColor: ["group-hover"],
      borderColor: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
