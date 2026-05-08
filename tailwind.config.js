/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // KTM Brand
        ktm: {
          orange:   '#FF6B00',
          'orange-light': '#FF8C33',
          'orange-dark':  '#CC5500',
          black:    '#1A1A1A',
          white:    '#FAFAFA',
        },
        // Map UI
        map: {
          bg:       '#F0EDE8',
          water:    '#A8C5DA',
          land:     '#E8E0D5',
          route:    '#FF6B00',
          pin:      '#E53E3E',
          'pin-visited': '#718096',
        },
        // Surface / Neutral
        surface: {
          DEFAULT:  '#FFFFFF',
          subtle:   '#F7F4F0',
          muted:    '#EDE9E3',
          border:   '#D4CECC',
        },
        // Text
        ink: {
          DEFAULT:  '#1A1A1A',
          muted:    '#5A5550',
          light:    '#9C968F',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-lg': ['3rem',   { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'display-md': ['2.25rem',{ lineHeight: '1.15',letterSpacing: '-0.02em' }],
        'display-sm': ['1.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        card:  '12px',
        chip:  '100px',
        panel: '16px',
      },
      boxShadow: {
        card:    '0 2px 8px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.06)',
        panel:   '0 8px 32px rgba(0,0,0,0.12)',
        pin:     '0 4px 12px rgba(229,62,62,0.35)',
        tooltip: '0 2px 12px rgba(0,0,0,0.15)',
      },
      spacing: {
        'sidebar': '320px',
        'topbar':  '56px',
      },
      zIndex: {
        map:       '0',
        overlay:   '10',
        sidebar:   '20',
        topbar:    '30',
        modal:     '40',
        tooltip:   '50',
      },
    },
  },
  plugins: [],
}
