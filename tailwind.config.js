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
        'widget-title': '#7a7a7a'
      },
      width: {
        home: '680px',
        page: '720px',
        thumbnail: 'calc(100% + 2 * 16px)'
      },
      margin: (theme, { negative }) => ({
        ...negative({ card: '16px' })
      }),
      backgroundColor: {
        'header-background': 'hsla(0,0%,100%,0.8)',
        'body-color': '#fafafa'
      },
      screens: {
        425: '425px',
        500: '500px'
      },
      zIndex: {
        9999: '9999'
      },
      boxShadow: {
        widget: '0 4px 10px -4px #ebedf0'
      }
    }
  },
  variants: {
    extend: {
      margin: ['first']
    }
  },
  plugins: []
}
