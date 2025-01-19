/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        light: "#CAD2C5",
        mediumLight: "#84A98C",
        mudGreen: "#52796F",
        dark: "#354F52",
        darker: "#2F3E46",
      },
      colors: {
        light: "#CAD2C5",
        mediumLight: "#84A98C",
        mudGreen: "#52796F",
        dark: "#354F52",
        darker: "#2F3E46",
      },
      fontFamily: {
        mono: ["MonoSpace"],
        cursive: "cursive",
      },
      backdropBlur: {
        5: "5px",
        10: "10px",
        20: "20px",
      },
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
      },
    },
  },
  plugins: [],
};
