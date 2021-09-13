module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brBg: "#FAFAFA",
        blackText: "#292929",
        primary: "#3278E2",
        secondary: "#EE9519",
        secLight: "#1B4575",
        greyBg: "#F9FAFB",
        lightBlack: "#595959",
        midBlack: "#393939",
        footerBg: "#1F1F1F",
      },
      spacing: { md: "48rem" },
      width: { "9/20": "45%", "12/25": "48%" },
      fontSize: { xxs: ["0.625rem", { lineHeight: "0.752rem" }] },
      fontFamily: { head: ["Montserrat"], body: ["Roboto"] },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
