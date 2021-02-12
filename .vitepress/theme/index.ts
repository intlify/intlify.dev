import './tailwind.css'
import './style.css'
import Layout from './Layout.vue'
import { watch } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

export default {
  Layout,
  // eslint-disable-next-line
  enhanceApp({ app, router, siteData }): void {
    const i18n = createI18n({
      legacy: false,
      locale: siteData.value.lang,
      globalInjection: true,
      messages
    })
    app.use(i18n)

    const localeMap = Object.keys(siteData.value.locales).reduce(
      (locales, key) => {
        locales[key] = siteData.value.locales[key].lang
        return locales
      },
      {} as Record<string, string>
    )

    // locale change via router path
    watch(router.route, val => {
      i18n.global.locale.value = localeMap[val.path]
    })
  }
}
