const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Viga", ...defaultTheme.fontFamily.serif]
      }
    }
  },
  variants: {},
  plugins: []
}
