import { defineConfig } from 'vite'
import path from 'path'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

export default defineConfig({
  optimizeDeps: {
    exclude: ['vue-i18n']
  },
  plugins: [
    vueI18n({
      include: [path.resolve(__dirname, './.vitepress/locales/**')]
    })
  ]
})
