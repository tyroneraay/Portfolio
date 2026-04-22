/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#baddff',
          300: '#7ec2ff',
          400: '#38a1ff',
          500: '#0d84f5',
          600: '#0068d3',
          700: '#0052ab',
          800: '#06468d',
          900: '#0b3b74',
        },
        surface: {
          light: '#fafaf7',
          DEFAULT: '#ffffff',
          dark: '#0f1115',
          'dark-elevated': '#181b22',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(13, 132, 245, 0.15)',
        cozy: '0 4px 20px -4px rgba(0, 0, 0, 0.08)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        gradient: 'gradient 8s ease infinite',
      },
    },
  },
  plugins: [],
};
