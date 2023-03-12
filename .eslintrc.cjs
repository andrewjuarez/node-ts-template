module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ["plugin:import/recommended", 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    project: ['./tsconfig.json'],
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/triple-slash-reference': ['off'],
    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'ts': 'never',
        'tsx': 'never'
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    '@typescript-eslint/strict-boolean-expressions': 'warn'
  }
}
