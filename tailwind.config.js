/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Custom scrollbar hide utility
      scrollbar: {
        hide: {
          'overflow-x': 'auto',
          'overflow-y': 'hidden',
          'scrollbar-width': 'none', /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none', /* Chrome, Safari, and Edge */
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.scrollbar-hide': {
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollbarWidth: 'none', /* Firefox */
          },
          '.scrollbar-hide::-webkit-scrollbar': {
            display: 'none', /* Chrome, Safari, and Edge */
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
};
