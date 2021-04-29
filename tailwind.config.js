const tailwindcss = require("tailwindcss");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      listStyleType: ["hover", "focus"],
    },
    fontFamily: {
      sans: ["Inter"],
    },
    keyframes: {
      "fade-in-down": {
        "0%": {
          opacity: "0",
          transform: "translateY(-10px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
      "fade-out-up": {
        from: {
          opacity: "1",
          transform: "translateY(0px)",
        },
        to: {
          opacity: "0",
          transform: "translateY(10)",
        },
      },
    },
    animation: {
      "fade-in-down": "fade-in-down 0.5s ease-out",
      "fade-out-up": "fade-out-up 0.5s ease-out",
    },
  },
  variants: {
    extend: {
      ringWidth: ["hover", "active", "group-hover"],
      ringColor: ["hover", "group-focus", "active", "group-hover"],
      borderColor: ["hover", "group-hover"],
      fontWeight: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require('tailwindcss-font-inter')()],
};
