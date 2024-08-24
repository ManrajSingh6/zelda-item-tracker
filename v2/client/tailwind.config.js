/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hylianGreen: '#0E7147',
        triforceGold: '#F2C335',
        goronRed: '#A2231D',
        zoraBlue: '#3A92D2',
        shadowBlack: '#1A1A1A',
        royalPurple: '#6A287E',
        fairyPink: '#E899BC',
        ancientStone: '#B5A897',
        primaryBlue: '#0ea5e9',
        darkGray: '#1e293b',
        lightGray: '#f1f5f9',
        white: '#ffffff',
        accentIndigo: '#6366f1',
        hoverTeal: '#14b8a6'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
