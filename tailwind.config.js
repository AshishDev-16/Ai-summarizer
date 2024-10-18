/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        textReveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'text-reveal': 'textReveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s forwards',
        'fade-in': 'fadeIn 0.5s ease-in-out 1.5s forwards',
      },
    },
  },
  plugins: [],
}
