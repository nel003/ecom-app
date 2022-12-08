/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#ffffff',
      'secondary': '#f9f9f9',
      'accent': '#171717',
      'error': '#e53d35',
    },
    extend: {},
  },
  plugins: [],
}
