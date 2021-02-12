import { createI18n } from 'vue-i18n'
import './tailwind.css'
import './style.css'
import Layout from './Layout.vue'
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
    console.log('enhance', app, siteData, i18n)
    // watch(siteData, (val, old) => {
    //   console.log('siteData watch', val, old)
    // })
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
  }
}
