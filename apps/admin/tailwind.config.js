/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        admin: {
          burgundy: '#4A0B24',
          gold: '#C5A059',
          goldLight: '#E8D3A2',
          surface: '#0F172A',
          card: '#1E293B',
          accent: '#721121',
        },
      },
    },
  },
  plugins: [],
};
