/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      colorYellow: "rgb(253 197 0)",
      stone: "rgb(28 25 23)",
      transparent: "transparent",
      gray: "rgb(107 114 128)",
      yellow: "rgb(251 191 36)",
      bgSlate: "rgb(241 245 249)",
      bgRed: "rgb(220 38 38)",
      bgWhite: "white",
    },
    extend: {
      keyframes: {
        circle: {
          from: { transform: "rotate(-45deg)" },
          to: { transform: "rotate(315deg)" },
        },
      },
      animation: {
        "move-circle": "circle 5s ease-in-out forwards infinite ",
      },
    },
  },
  plugins: [],
};
