module.exports = {
  locales: ['en-US', 'zh-Hans'],
  defaultLocale: 'en-US',
  pages: {
    '*': [
      'common',
      'widgets',
      'locales'
    ],
    '/': ['home']
  },
  interpolation: {
    prefix: '${',
    suffix: '}'
  },
  loadLocaleFrom: (locale, namespace) =>
    import(`./src/translations/${locale}/${namespace}`).then((m) => m.default)
}
