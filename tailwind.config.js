/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-navy': '#0E3572',
        'carbon-black': '#16181b',
        'charcoal': '#58595b',
        'snow-white': '#fffafa',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        headings: ['Sora', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'fade-in-down': 'fadeInDown 0.4s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
