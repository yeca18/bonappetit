module.exports = {
  extends: ['airbnb-base', 'eslint-config-prettier'],
  plugins: ['prettier', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'no-extra-semi': 0,
    semi: 0,
    strict: [0, 'global'],
    'no-useless-escape': 0,
    'linebreak-style': 0,
    'prettier/prettier': ['warn', { semi: false, singleQuote: true, trailingComma: 'es5' }],
    'react/jsx-uses-vars': 2,
    'react/jsx-uses-react': 2,
    'react/react-in-jsx-scope': 2
  },
};