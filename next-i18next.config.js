/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    fallbackLng: 'en',
    locales: ['zh-Hans', 'en']
  },
  localePath: path.resolve('./public/locales')
}
