module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-nested-ternary': 'off',
        'no-magic-numbers': 'off',
        'max-lines': ['error', {max: 500}],
      },
    },
  ],
  settings: {
    'import/ignore': ['node_modules'],
    'import/resolver': {
      node: {
        paths: ['src'],
        settings: {
          'import/resolver': {
            node: {
              paths: ['src'],
              extensions: [
                '.ios.js',
                '.android.js',
                '.js',
                '.jsx',
                '.ts',
                '.tsx',
                '.json',
              ],
            },
          },
        },
      },
    },
  },
};
