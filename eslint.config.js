import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import vueI18n from '@intlify/eslint-plugin-vue-i18n'
import eslintConfigPrettier from 'eslint-config-prettier'
import vueParser from 'vue-eslint-parser'

export default [
  { ignores: ['dist/**', 'public/**', '.vitepress/cache/**', '.vitepress/dist/**'] },

  ...pluginVue.configs['flat/recommended'],
  ...tseslint.configs.recommended,
  ...vueI18n.configs.recommended,

  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        sourceType: 'module'
      }
    }
  },

  {
    settings: {
      'vue-i18n': {
        localeDir: '.vitepress/locales/*.json',
        messageSyntaxVersion: '^11.0.0'
      }
    }
  },

  {
    files: ['.vitepress/**/*.{ts,js,vue}'],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'vue/one-component-per-file': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-deprecated-props-default-this': 'off',
      'vue/require-v-for-key': 'off',
      'vue/html-self-closing': ['error', { html: { void: 'always' } }]
    }
  },

  eslintConfigPrettier
]
