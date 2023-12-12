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
      },
      scale: {
        '101': '1.01',
        '102': '1.02',
        '103': '1.03',
        '104': '1.04',
        '105': '1.05',
        '106': '1.06',
        '107': '1.07',
        '108': '1.08',
        '109': '1.09',
        '110': '1.10',
      }
    },
  },
  plugins: [],
}