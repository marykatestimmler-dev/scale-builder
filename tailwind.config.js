/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        syne: ['var(--font-syne)', 'Syne', 'sans-serif'],
        space: ['var(--font-space)', 'Space Grotesk', 'sans-serif'],
      },
      colors: {
        'deep-purple': '#1a0a2e',
        'mid-purple': '#2d1b4e',
        'hot-pink': '#ff2e63',
        'cyan-accent': '#08d9d6',
        'lime-accent': '#c8ff00',
      },
    },
  },
  plugins: [],
};
