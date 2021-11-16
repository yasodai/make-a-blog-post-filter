// const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        text: "hsl(220 4.8% 28.9%)",
        accent1: "hsl(220 43.6% 57.5%)",
        accent2: "hsl(220 71.4% 95.9%)",
        bkg: "hsl(220 100% 99.6%)",
      },
      backgroundColor: {
        primary: "hsl(220 43.6% 57.5% / .96)",
      },
      boxShadow: {
        "boxs-sm":
          "4px 6px 8px hsl(220 43.6% 57.5% / 14%),-3px 3px 18px 2px hsl(220 43.6% 57.5% / 12%), 2px 5px 10px -3px hsl(220 43.6% 57.5% / 20%)",
        "boxs-lg":
          " 0px 8px 10px hsl(220 43.6% 57.5% / 14%),0px 3px 14px 2px hsl(220 43.6% 57.5% / 12%),0px 5px 5px -3px hsl(220 43.6% 57.5% / 20%)",
      },
      animation: {
        skeleton: "skeleton 650ms linear infinite",
      },
      keyframes: {
        skeleton: {
          "0%": { "background-color": "hsl(220 71.4% 95.9%)" },
          "100%": { "background-color": "hsl(220 71.4% 95.9% / .2)" },
        },
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
