/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-yellow-1': '#FFAC5C',
        'custom-yellow-2': '#FFC653',
        'custom-yellow-3': '#FFFF82',
        'custom-yellow-4': '#FFFFBB',
      },
    },
  },
  plugins: [],
};
