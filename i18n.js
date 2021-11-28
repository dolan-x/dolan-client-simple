/**
 * @type {import('next-translate').I18nConfig}
 */
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
  loadLocaleFrom: (locale, namespace) => {
    return import(`./src/translations/${locale}/${namespace}`).then((m) => m.default)
  }
}
