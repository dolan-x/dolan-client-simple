import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  important: true,
  extract: {
    include: [
      './src/**/*.{js,ts,jsx,tsx}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'widget-title': '#7a7a7a'
      },
      width: {
        aside: '240px',
        main: 'calc(100% - 240px)',
        'heading-image': 'calc(100% + 2 * 16px)'
      },
      margin: {
        card: '16px'
      },
      backgroundColor: {
        'header-background': 'hsla(0,0%,100%,0.8)',
        'body-color': '#f4f4f4'
      },
      screens: {
        425: '425px',
        500: '500px'
      },
      zIndex: {
        9999: '9999'
      },
      boxShadow: {
        widget: '0 1px 2px 0 rgb(0 0 0 / 10%)'
      }
    }
  },
  plugins: []
})
