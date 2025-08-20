/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        mood: {
          happy: '#fbbf24',
          sad: '#60a5fa',
          angry: '#f87171',
          anxious: '#a78bfa',
          excited: '#34d399',
          relaxed: '#6ee7b7',
          romantic: '#f9a8d4',
          nostalgic: '#fbbf24',
          focused: '#a78bfa',
          energetic: '#fbbf24',
          inspired: '#34d399',
          moody: '#a78bfa',
          stressed: '#f87171',
          bored: '#9ca3af',
          lonely: '#60a5fa',
          tired: '#9ca3af',
          confused: '#a78bfa',
          scared: '#7c3aed',
        },
        content: {
          music: '#ec4899',
          movie: '#8b5cf6',
          book: '#06b6d4',
          podcast: '#10b981',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}
