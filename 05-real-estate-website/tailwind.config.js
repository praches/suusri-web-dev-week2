/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#f4f6f8',
          100: '#e8edf2',
          200: '#d1dae4',
          300: '#aab8c8',
          400: '#7d92a9',
          500: '#5a718a',
          600: '#475a70',
          700: '#3a4a5c',
          800: '#2d3a48',
          900: '#1e2832',
          950: '#121a22',
        },
        champagne: {
          50: '#fbf7f0',
          100: '#f5ebd9',
          200: '#ecd7b3',
          300: '#e0bd82',
          400: '#d4a455',
          500: '#c6913c',
          600: '#a97530',
          700: '#875a28',
          800: '#6e4828',
          900: '#5c3c24',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdfaf5',
          200: '#f9f3ea',
          300: '#f3e9d9',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
