module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'

  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/bg-sidebar-form.svg')",
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        16: 'repeat(16, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
      },

      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },

    keyframes: {
      slide1: {
        '0%': { transform: 'translateX(10%)', opacity: 0.5 },
        '100%': { transform: 'translateX(0%)', opacity: 1 },
      },
      slide2: {
        '0%': { transform: 'translateY(-20%)', opacity: 0.5 },
        '100%': { transform: 'translateY(0%)', opacity: 1 },
      },
      slide3: {
        '0%': { transform: 'translateY(0%)', opacity: 1 },
        '50%': { transform: 'translateY(-20%)', opacity: 0.6 },
        '100%': { transform: 'translateY(-40%)', opacity: 0.2 },
      },
      spin: {
        from: {
          transform: 'rotate(0deg)',
        },
        to: {
          transform: 'rotate(360deg)',
        },
      },
    },

    animation: {
      'spin': 'spin 1s linear infinite' ,
      'sliding-right': 'slide1 0.8s linear',
      'sliding-up': 'slide2 0.3s linear',
      'sliding-down': 'slide3 0.5s linear',
    },
  },
  plugins: [],
}
