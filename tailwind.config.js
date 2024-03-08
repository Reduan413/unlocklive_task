/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      AbrilDisplay: ["Abril-Display", "sans-serif"],
      ValueSansPro: ["Value-Sans-Pro", "sans-serif"],
      BakildaHistori: ["Bakilda-Histori", "sans-serif"],
      Lemon: ["Lemon-font", "sans-serif"],
    },
    colors:{
      primaryColor:"#270A05",
      secondaryColor:"#86371C",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
