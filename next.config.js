// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')(['@geist-ui/react'])

const config = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true
}

module.exports = withTM(config)
