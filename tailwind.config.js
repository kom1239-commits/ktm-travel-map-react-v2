/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ktm: {
          yellow:        '#F4C400',
          'yellow-soft': '#FFE066',
          'yellow-dark': '#D9AE00',
          navy:          '#0E2D50',
          'navy-soft':   '#1B3D63',
          'navy-ink':    '#0A1F38',
        },
        map: {
          bg:        '#EFE8DA',
          land:      '#E5DCC9',
          forest:    '#B7C9A8',
          forestDk:  '#8FAA80',
          ridge:     '#CFC2A7',
          water:     '#A9C9D6',
          route:     '#F4C400',
          routeEdge: '#D9AE00',
        },
        ink: {
          DEFAULT: '#0E2D50',
          muted:   '#5C6B7E',
          light:   '#9AA4B2',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle:  '#F6F4EE',
          border:  '#E6E2D8',
        },
      },
      fontFamily: {
        sans:    ['Pretendard', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Pretendard', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card:  '16px',
        chip:  '999px',
        sheet: '20px',
      },
      boxShadow: {
        card:    '0 4px 16px rgba(14,45,80,0.08), 0 1px 2px rgba(14,45,80,0.05)',
        sheet:   '0 -8px 24px rgba(14,45,80,0.10)',
        chip:    '0 2px 8px rgba(14,45,80,0.10)',
        fab:     '0 6px 16px rgba(244,196,0,0.45)',
        pin:     '0 4px 10px rgba(14,45,80,0.25)',
      },
      zIndex: {
        map: '0', overlay: '10', sheet: '20', topbar: '30', tab: '40',
      },
    },
  },
  plugins: [],
}
