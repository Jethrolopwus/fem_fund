/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(118.17deg, #4E7836 2.08%, #90DE64 100.89%)',
        'custom-svg': "url('/src/assets/mata.jpeg')",
      },
    },
  },
  plugins: [],
}