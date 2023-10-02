'use strict'

module.exports = {
  root: true,
  globals: {},
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@intlify/vue-i18n/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  rules: {
    'object-curly-spacing': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'vue/one-component-per-file': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/experimental-script-setup-vars': 'off',
    'vue/no-deprecated-props-default-this': 'off',
    'vue/require-v-for-key': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always'
        }
      }
    ]
  }
}
