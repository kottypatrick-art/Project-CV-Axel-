/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charbon: {
          DEFAULT: '#0F0F13',
          surface: '#14141A',
          card: '#1E1E26',
          elevated: '#24242F',
        },
        or: {
          DEFAULT: '#D4A843',
          light: '#E5C368',
          bright: '#F5D78E',
          dark: '#B88A2B',
          dim: 'rgba(212, 168, 67, 0.12)',
          glow: 'rgba(212, 168, 67, 0.28)',
          border: 'rgba(212, 168, 67, 0.22)',
          borderBright: 'rgba(229, 195, 104, 0.55)',
        },
        creme: {
          DEFAULT: '#F5F3EE',
          muted: '#D1CFCA',
          dim: '#999790',
        },
        ardoise: {
          DEFAULT: '#1E1E26',
          dark: '#14141A',
          light: '#282833',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        subtle: '0 4px 20px rgba(0, 0, 0, 0.4)',
        card: '0 16px 36px rgba(0, 0, 0, 0.55)',
        prestige: '0 24px 60px rgba(0, 0, 0, 0.75), 0 0 25px rgba(212, 168, 67, 0.08)',
        goldGlow: '0 8px 24px rgba(212, 168, 67, 0.35)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
};
