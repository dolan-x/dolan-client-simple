module.exports = {
  important: true,
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {

      },
      width: {
        home: '680px',
        page: '720px',
        thumbnail: 'calc(100% + 2 * 16px)'
      },
      margin: (theme, { negative }) => ({
        ...negative({ card: '16px' })
      }),
      zIndex: {
        9999: 9999
      }
    }
  },
  variants: {
    extend: {
      padding: ['first']
    }
  },
  plugins: []
}
