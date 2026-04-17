/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#F5C518',
          'yellow-hover': '#E6B800',
          'yellow-muted': '#F5C51833',
        },
        dark: {
          bg: '#0A0A0A',
          surface: '#111111',
          elevated: '#1A1A1A',
          border: '#2A2A2A',
          muted: '#6B6B6B',
        },
        light: {
          bg: '#FAFAFA',
          surface: '#FFFFFF',
          elevated: '#F0F0F0',
          border: '#E0E0E0',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 4.5vw, 5rem)', { lineHeight: '1.08', fontWeight: '800' }],
        'h1': ['clamp(2rem, 3.5vw, 3.5rem)', { lineHeight: '1.15', fontWeight: '700' }],
        'h2': ['clamp(1.75rem, 2.75vw, 2.75rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['clamp(1.125rem, 1.5vw, 1.5rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
      },
    },
  },
  plugins: [],
}
