/* eslint-disable @typescript-eslint/no-unused-vars */
import './tailwind.css'
import './style.css'
import Layout from './Layout.vue'
import { watch } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

import type { Theme } from 'vitepress'

const LOCALE_PATH_MAP = {
  root: '/',
  ja: '/ja/'
} as Record<string, string>

export default {
  Layout,
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
        const lang = siteData.value.locales[key].lang
        if (lang) {
          locales[LOCALE_PATH_MAP[key]] = lang
        }
        return locales
      },
      {} as Record<string, string>
    )

    // TODO: should change to more smart way
    // locale change via router path
    /* DISABLE
    watch(router.route, val => {
      console.log('watch route ...', val, i18n.global.locale)
      if (localeMap[val.path]) {
        i18n.global.locale.value = localeMap[val.path]
      }
    })
    */
  }
} satisfies Theme

/* eslint-enable @typescript-eslint/no-unused-vars */
