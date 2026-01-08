/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#1E3A8A', // Deep Blue
        'secondary': '#FDBA74', // Soft Orange
        'accent': '#D97706', // Darker Orange/Gold
        'background': '#F9FAFB', // Light Gray Background
        'text-dark': '#1F2937', // Dark Gray Text
        'text-light': '#E5E7EB', // Very Light Gray Text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}