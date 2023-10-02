import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'

import head from './head.ts'

const mainInfo = {
  title: 'Intlify',
  description: 'The Borderless Internationalization'
}

export default defineConfig({
  srcExclude: ['**/README.md'],
  cleanUrls: true,
  vite: {
    build: {
      minify: false
    },
    plugins: [
      vueI18n({
        include: resolve(
          dirname(fileURLToPath(import.meta.url)),
          '../locales/**'
        ),
        // jitCompilation: true,
        // runtimeOnly: false,
        ssr: true
      })
    ]
  },
  ...mainInfo,
  head,
  lang: 'en',
  locales: {
    root: {
      lang: 'en',
      ...mainInfo,
      themeConfig: {
        nav: [
          {
            text: 'Blog',
            link: 'https://blog.intlify.dev'
          },
          {
            text: 'GitHub',
            link: 'https://github.com/intlify'
          }
        ]
      }
    },
    ja: {
      lang: 'ja',
      ...mainInfo,
      themeConfig: {
        nav: [
          {
            text: 'ブログ',
            link: 'https://blog.intlify.dev'
          },
          {
            text: 'GitHub',
            link: 'https://github.com/intlify'
          }
        ]
      }
    }
  },
  themeConfig: {
    logo: 'nav_logo.png'
    /*
    locales: {
      '/': {
        nav: [
          {
            text: 'Blog',
            link: 'https://blog.intlify.dev'
          },
          {
            text: 'GitHub',
            link: 'https://github.com/intlify'
          }
        ]
      },
      '/ja/': {
        nav: [
          {
            text: 'ブログ',
            link: 'https://blog.intlify.dev'
          },
          {
            text: 'GitHub',
            link: 'https://github.com/intlify'
          }
        ]
      }
    }
    */
  }
  /*
  customData: {
    projects: [
      {
        title: 'Vue I18n',
        link: 'https://github.com/kazupon/vue-i18n',
        logo: '/projects/vue-i18n.png'
      },
      {
        title: 'ESLint Plugin Vue I18n',
        link: 'https://github.com/intlify/eslint-plugin-vue-i18n',
        logo: '/projects/eslint-plugin-vue-i18n.png'
      }
    ],
    sponsors: {
      platinum: [
        {
          title: 'ZenArchitects',
          link: 'https://zenarchitects.co.jp',
          logo: '/sponsors/zenarchitects.png'
        }
      ],
      special: [
        {
          title: 'PLAID',
          link: 'https://plaid.co.jp/',
          logo: '/sponsors/plaid.svg'
        }
      ],
      gold: [
        {
          title: 'NuxtLabs',
          link: 'https://nuxtlabs.com/',
          logo: '/sponsors/nuxtlabs.svg'
        },
        {
          title: 'RapidAPI',
          link: 'https://rapidapi.com',
          logo: '/sponsors/RapidAPI.png'
        },
        {
          title: 'Localazy',
          link: 'https://localazy.com/blog/how-to-localize-vuejs-app-with-vue-i18n-and-localazy?utm_source=kazupon&utm_medium=banner&utm_campaign=sponsorships_kazupon&utm_content=logo',
          logo: '/sponsors/localazy.svg'
        },
        {
          title: 'Crowdin',
          link: 'https://crowdin.com/teams/engineering?utm_source=vue-i18n.intlify.dev&utm_medium=referral',
          logo: '/sponsors/crowdin.svg'
        }
      ],
      sliver: [],
      bronze: [
        {
          title: 'VueMastery',
          link: 'https://www.vuemastery.com/',
          logo: '/sponsors/vuemastery.png'
        },
        {
          title: 'Froggly',
          link: 'https://froggly.pl/',
          logo: '/sponsors/Froggly.svg'
        }
      ]
    }
  }
  */
})
