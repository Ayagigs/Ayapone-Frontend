/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  // purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans'],
      },
      screens: {
        xxs: '483px',
        xs: '576px',
      },
      logo: {
        'success-bg': "url('assets/images/ayapone_logo.svg')",
      },
      colors: {
        'ayaPrimary-900': '#A94B0C',
        'ayaPrimary-800': '#BB6124',
        'ayaPrimary-700': '#E96107',
        'ayaPrimary-600': '#FF7417',
        'ayaPrimary-500': '#F4863E',
        'ayaPrimary-400': '#F8A56D',
        'ayaPrimary-300': '#F7BE98',
        'ayaPrimary-200': '#FADAC4',
        'ayaPrimary-100': '#FFF6F0',
        'ayaNeutral-900': '#483C31',
        'ayaNeutral-800': '#463D30',
        'ayaNeutral-700': '#605042',
        'ayaNeutral-600': '#917D6B',
        'ayaNeutral-500': '#AE9D8E',
        'ayaNeutral-400': '#BFB4A3',
        'ayaNeutral-300': '#D7D1C7',
        'ayaNeutral-200': '#E6E1DC',
        'ayaNeutral-100': '#FBFAF9',
        'ayaSuccess-200': '#16A335',
        'ayaSuccess-100': '#F0FFF3',
        'ayaDanger-200': '#E91010',
        'ayaDanger-100': '#FFF2F2',
      },
    },
  },
  plugins: [],
}
