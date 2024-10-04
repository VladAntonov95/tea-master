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
        smallMobile: "4px",
        mobile: "8px",
        tablet: "16px",
        laptop: "32px",
        desktop: "64px",
      },
    },
    screens: {
      smallMobile: "320px",
      // => @media (min-width: 320px) { ... }
      mobile: "375px",
      // => @media (min-width: 375px) { ... }
      bigMobile: "425px",
      // => @media (min-width: 425px) { ... }
      tablet: "768px",
      // => @media (min-width: 768px) { ... }
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
      desktop: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      wood: "#DD4132",
      "dark-green": "#50644d",
      "tableware-color": "#9E4624",
      accent: "#FF6822",
      background: "white",
      "sections-border": "#f4f4f4",
      "dark-text": "#202020",
      "white-text": "#fff",
      "gray-text": "#7a7c7f",
      swiper: "#F2C6A0",
      "black-text": "#000",
      "header-symbol-color": "#27302e",
      "header-tableware-symbol-color": "#5A0C0C",
      "hover-color": "#598318",
      "tableware-hover": "#B1533E",
    },
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        custom:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
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
      m: "15px",
      sm: "18px",
      md: "20px",
      l: "22px",
      lg: "27px",
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
