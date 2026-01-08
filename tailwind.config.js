/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors inspired by modern, inviting Arabic design (deep blue/teal with gold/sand accents)
        'primary': '#004D40', // Deep Teal/Dark Green (Strong, reliable)
        'secondary': '#FFC107', // Amber/Gold (Accent, luxury, warmth)
        'accent': '#4DB6AC', // Lighter Teal (Highlight, modern feel)
        'background': '#F5F5F5', // Light Gray/Off-White (Clean background)
        'text-dark': '#212121', // Dark text
        'text-light': '#FFFFFF', // Light text
      },
      fontFamily: {
        // Assuming a modern Arabic font is used, or a clean sans-serif for English/numbers
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        // Example for a specific Arabic font (needs to be imported in index.css)
        // 'arabic': ['Amiri', 'serif'], 
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}