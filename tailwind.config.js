/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'musa-blue': '#0066cc',
        'musa-green': '#00994d',
      },
    },
  },
  plugins: [],
};