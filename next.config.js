/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')(['@geist-ui/react'])
const { i18n } = require('./next-i18next.config')

const config = {
  i18n,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true
}

module.exports = withTM(config)
