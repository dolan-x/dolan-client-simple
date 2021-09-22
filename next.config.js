/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@geist-ui/react'])
const { i18n } = require('./next-i18next.config')

const plugins = [withTM]
const config = {
  i18n,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true
}

module.exports = withPlugins(plugins, config)
