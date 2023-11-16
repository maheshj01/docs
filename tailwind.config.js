module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        "primary": "#25c2a0;",
        "primary-dark": "#330867"
      }
    },
  },
  plugins: [],
}