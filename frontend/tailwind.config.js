/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'serif': ['PT Serif', 'ui-serif','Georgia'],
      'display': ['Alice', 'Times New Roman', 'Georgia'],
      'sans': ['Lato', 'Inter', 'Arial'],
      'heading':['Gloock','Alice','Times New Roman']
    },
    extend: {
      colors: {
        accent: 'var(--clr-accent)',
        primary: 'var(--clr-primary)',
        secondary: 'var(--clr-secondary)',
        tertiary: 'var(--clr-tertiary)'

      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
}
