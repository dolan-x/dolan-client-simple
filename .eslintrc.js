module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'node',
    'promise'
  ],
  settings: {
    'import/core-modules': ['styled-jsx/css']
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/self-closing-comp': [
      2,
      {
        component: true
      }
    ],
    'react/jsx-closing-bracket-location': [1, 'line-aligned'],
    'react/jsx-closing-tag-location': 0,
    'react/jsx-space-before-closing': [2, 'always'],
    'react/jsx-pascal-case': 2,
    'react/jsx-max-props-per-line': 2,
    'react/jsx-first-prop-new-line': [2, 'multiline'],

    'import/no-anonymous-default-export': 0
  }
}
