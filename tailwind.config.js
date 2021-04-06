const tailwindcss = require("tailwindcss");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      listStyleType: ["hover", "focus"],
    },
    fontFamily: {
      sans: ["Helvetica"],
    },
  },
  variants: {
    extend: {
      ringWidth: ["active"],
      ringColor: ["group-focus", "active"],
      borderColor: ["group-hover"],
      fontWeight: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
