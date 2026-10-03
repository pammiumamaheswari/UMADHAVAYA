/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        heritage: {
          maroonDark: '#4A0614',
          maroon: '#670A1E',
          maroonLight: '#7B112B',
          crimson: '#991B1B',
          gold: '#C5A059',
          goldLight: '#E8D3A2',
          goldDark: '#9E7A31',
          emerald: '#0B4F3F',
          cream: '#FAF7F2',
          ivory: '#FFFDF9',
          charcoal: '#1A1818',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(197, 160, 89, 0.25)',
        'card-lux': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
