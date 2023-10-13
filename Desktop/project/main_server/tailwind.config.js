module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "page-background-mobile": "url('/img/bg.jpg')",
        "page-background-desktop": "url('/img/bg--desktop.jpg')",
        "checkbox-checked": "url('/img/checkbox--checked.svg')",
        "checkbox-unchecked": "url('/img/checkbox--unchecked.svg')",
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        primary: "#91beed", //outer Space
        secondary: "#d9e9fa", //salem
        jordyBlue: "#89c4f4",
        outerSpace: "#2e3131 ",
        salem: "#1e824c",

        CarrotOrange: "#e67e22 ",
        myWhite: "#FCFCFC",
        shark: "#24252a ",
      },
      fill: {
        primary: "#3626a7",
        silverChalice: "#ADADAD",
        white: "#FFFFFF",
        black: "#000000",
      },
      fontSize: {
        "10xl": "10rem",
      },
      height: {
        18: "4.5rem",
      },
      width: {
        18: "4.5rem",
      },
    },
    fontFamily: {
      // display: ["Mirage"],
      sans: ["Helvetica"],
      // handwriting: ["BrittanySignature"],
      // serif: ["Roboto Slab"]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
