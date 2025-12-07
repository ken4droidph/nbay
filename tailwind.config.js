/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nba-red': '#C8102E',
        'nba-blue': '#1D428A',
        'nba-gold': '#FFD700',
      },
    },
  },
  plugins: [],
}