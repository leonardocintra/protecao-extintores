
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CE2029',
        charcoal: '#1A1A1A',
      },
    },
  },
  plugins: [],
}
