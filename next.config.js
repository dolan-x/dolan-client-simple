/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@geist-ui/react'])
const WindiCSS = require('windicss-webpack-plugin').default
const { i18n } = require('./next-i18next.config')

const plugins = [withTM]

/**
 * @type {import('next').NextConfig}
 **/
const config = {
  i18n,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  webpack (config) {
    config.plugins.push(new WindiCSS())
    return config
  }
}

module.exports = withPlugins(plugins, config)
