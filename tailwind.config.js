/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        smallMobile: "8px",
        mobile: "16px",
        tablet: "32px",
        laptop: "32px",
        desktop: "150px",
      },
    },
    screens: {
      smallMobile: "320px",
      // => @media (min-width: 320px) { ... }
      mobile: "375px",
      // => @media (min-width: 375px) { ... }
      tablet: "744px",
      // => @media (min-width: 744px) { ... }
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
      desktop: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      wood: "#795548",
      accent: "#b26a00",
      background: "#fbfff8",
      "dark-text": "#202020",
      "white-text": "#fff",
      "gray-text": "#7a7c7f",
      swiper: "#F2C6A0",
      stroke: "#20201D",
      backdrop: "rgba(149, 149, 149, 0.6)",
      "black-text": "#000",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        crimson: ["Crimson Pro", "serif"],
      },
      boxShadow: {
        custom:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      },
    },
    fontWeight: {
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    fontSize: {
      xs: "12px",
      s: "14px",
      m: "16px",
      sm: "18px",
      md: "20px",
      l: "22px",
      lg: "26px",
      xl: "28px",
      "2xl": "30px",
      "3xl": "32px",
      "4xl": "34px",
      "5xl": "36px",
      "6xl": "40px",
      "7xl": "44px",
      "8xl": "56px",
      "9xl": "48px",
    },
    plugins: [],
  },
};
