module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Lato"],
    },
    extend: {
      backgroundImage: (theme) => ({
        plant: "url('/plant.jpg')",
        pap: "url('/pap.png')"
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
