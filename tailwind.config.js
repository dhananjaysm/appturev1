const { url } = require('inspector');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      // https://vercel.com/design/color
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        bounce: 'bounce 1s infinite',
        border: 'border 4s ease infinite',
      },
      colors: {
        yellowLogo: '#FFC100',
        gray: colors.zinc,
        'gray-1000': 'rgb(17,17,19)',
        'gray-1100': 'rgb(10,10,11)',
        'gray-light': 'rgb(239,239,241)',
        'gray-medlight': 'rgb(230,230,234)',
        vercel: {
          pink: '#FF0080',
          red: '#FF0033',
          blue: '#0070F3',
          cyan: '#50E3C2',
          orange: '#F5A623',
          violet: '#7928CA',
        },
        dashboard: {
          green: '#eefcef',
          orange: '#ffeee2',
          blue: '#e6f5fa',
          gray: '#f4f5f9',
        },
      },
      backgroundImage: ({ theme }) => ({
        'vc-border-gradient': `radial-gradient(at left top, ${theme(
          'colors.gray.100'
        )}, 50px, ${theme('colors.gray.300')} 50%)`,
        'large-logo': "url('/appture-png-min.png')",
        'small-logo': "url('/appture-logo-only.png')",
      }),
      keyframes: ({ theme }) => ({
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        rerender: {
          '0%': {
            ['border-color']: theme('colors.vercel.pink'),
          },
          '40%': {
            ['border-color']: theme('colors.vercel.pink'),
          },
        },
        highlight: {
          '0%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
          '40%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        translateXReset: {
          '100%': {
            transform: 'translateX(0)',
          },
        },
        fadeToTransparent: {
          '0%': {
            opacity: 1,
          },
          '40%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
      }),
    },
  },
  // plugins: [require('@tailwindcss/forms')],
};
