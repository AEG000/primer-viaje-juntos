/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beachCream: '#FAF9F6',
        turquoiseMain: '#72D2C1',
        turquoiseDark: '#115e59',
      },
    },
  },
  plugins: [],
}