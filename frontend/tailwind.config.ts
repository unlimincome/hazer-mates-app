import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF5C00',    // оранжевый Hazer Mates
        secondary: '#7B2CBF',  // фиолетовый Hazer Mates
        background: '#f9f9f9',
        dark: '#1e1e1e'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem'
      }
    }
  },
  plugins: []
}

export default config
