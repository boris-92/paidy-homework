// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  ignorePatterns: ['/dist/*', 'scripts/*'],
  rules: {
    'prettier/prettier': 'error',
  },
  env: {
    jest: true,
  },
};
