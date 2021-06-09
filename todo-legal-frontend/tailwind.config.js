module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'comfortaa': ['Comfortaa']
      }, 
      transformOrigin: {
        0: "0%",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["responsive", "hover", "focus", "focus-within"],
    },
  },
  plugins: [],
};
