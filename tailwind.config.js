/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        spacing: {
          18: '4.5rem',
          21: '5.25rem',
        },
        keyframes: {
          'fade-left-smooth': {
            '0%': { opacity: '0', transform: 'translateX(-40px) scale(0.95)' },
            '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
          },
          'fade-right-smooth': {
            '0%': { opacity: '0', transform: 'translateX(40px) scale(0.95)' },
            '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
          },
        },
        animation: {
          'fade-left-smooth': 'fade-left-smooth 0.4s ease-out',
          'fade-right-smooth': 'fade-right-smooth 0.4s ease-out',
        },
      },
    },
    plugins: [],
  };
  