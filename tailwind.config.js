/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        landing:
          'linear-gradient(rgba(35, 25, 23, .48), rgba(35, 25, 23, .48)), url(/src/assets/landing.jpg)',
        interior:
          'linear-gradient(rgba(35, 25, 23, .48), rgba(35, 25, 23, .48)), url(/src/assets/interior.jpg)',
        church:
          'linear-gradient(rgba(35, 25, 23, .48), rgba(35, 25, 23, .48)), url(/src/assets/church.jpg)',
        footer:
          'linear-gradient(rgba(225, 219, 203, .97), rgba(225, 219, 203, .97)), url(/src/assets/footer.webp)',
      },
    },
  },
  plugins: [],
};
