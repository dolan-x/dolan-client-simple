/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@geist-ui/react'])
const withNextTranslate = require('next-translate')
const WindiCSS = require('windicss-webpack-plugin').default

const plugins = [withNextTranslate, withTM]

/**
 * @type {import('next').NextConfig}
 **/
const config = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  webpack (config) {
    config.plugins.push(new WindiCSS())
    return config
  }
}

module.exports = withPlugins(plugins, config)
