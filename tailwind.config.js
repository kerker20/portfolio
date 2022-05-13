module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer'), require("daisyui")],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
}
