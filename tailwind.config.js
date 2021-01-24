module.exports = {
  purge: ['./*.md', './.vitepress/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      intlify: ['"copperplate, serif"']
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
