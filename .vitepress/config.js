const head = require('./head')

const mainInfo = {
  title: 'Intlify',
  description: 'The Borderless Internationalization',
}

/**
 * @type {UserConfig}
 */
const config = {
  ...mainInfo,
  head,
  lang: 'en',
  locales: {
    '/': { lang: 'en', ...mainInfo },
    '/ja/': { lang: 'ja', ...mainInfo }
  },
  themeConfig: {
    docsBranch: 'master',
    logo: 'nav_logo.png',
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
            text: 'Blog',
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
  customData: {
    projects: [
      {
        title: 'Vue I18n',
        link: 'https://github.com/kazupon/vue-i18n',
        logo: 'projects/vue-i18n.png'
      },
      {
        title: 'ESLint Plugin Vue I18n',
        link: 'https://github.com/intlify/eslint-plugin-vue-i18n',
        logo: 'projects/eslint-plugin-vue-i18n.png'
      }
    ],
    sponsors: {
      gold: [
        {
          title: 'NuxtJS',
          link: 'https://nuxtjs.org',
          logo: 'sponsors/nuxt.png'
        }
      ],
      sliver: [
        {
          title: 'BabelEdit',
          link:
            'https://www.codeandweb.com/babeledit?utm_campaign=vue-i18n-2019-01',
          logo: 'sponsors/babeledit.png'
        }
      ],
      bronze: [
        {
          title: 'ZenArchitects',
          link: 'https://zenarchitects.co.jp',
          logo: 'sponsors/zenarchitects.png'
        },
        {
          title: 'Sendcloud',
          link: 'https://www.sendcloud.com',
          logo: 'sponsors/sendcloud.png'
        },
        {
          title: 'VueMastery',
          link: 'https://www.vuemastery.com/',
          logo: 'sponsors/vuemastery.png'
        }
      ]
    }
  }
}

module.exports = config
