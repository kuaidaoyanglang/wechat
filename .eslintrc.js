module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'comma-dangle': 'off',
    'import/first': 'off',
    'indent': 'off',
    'no-restricted-globals': 'off',
    'class-methods-use-this': 'off',
    'no-tabs': 'off',
    'no-param-reassign': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'typescript-eslint-parser',
  },
};
