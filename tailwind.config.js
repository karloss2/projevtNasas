/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui', 'Inter', 'Poppins', 'sans-serif'],
      },
      colors: {
        cosmic: {
          900: '#0b0616',
          800: '#130b25',
          700: '#1a1034',
          600: '#221443',
          500: '#2b1854',
          400: '#5b3ea6',
          300: '#8f6df0',
        },
      },
      boxShadow: {
        'glow': '0 0 40px rgba(143,109,240,0.35)',
      },
      backgroundImage: {
        'star-gradient': 'radial-gradient(ellipse at 50% -20%, rgba(139,92,246,0.25), transparent 60%), radial-gradient(ellipse at 120% 0%, rgba(59,130,246,0.15), transparent 50%), radial-gradient(ellipse at -20% 0%, rgba(236,72,153,0.1), transparent 50%)',
      },
    },
  },
  plugins: [],
}
