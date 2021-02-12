import { defineConfig } from 'vite'
import path from 'path'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

export default defineConfig({
  plugins: [vueI18n({
    include: [path.resolve(__dirname, './.vitepress/locales/**')]
    // compositionOnly: false,
    // fullInstall: false
  })]
})
