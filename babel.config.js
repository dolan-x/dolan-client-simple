module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'import',
      {
        libraryName: '@geist-ui/react',
        libraryDirectory: 'esm'
      }
    ]
  ]
}
