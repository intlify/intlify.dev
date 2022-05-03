const head = require('./head')

const mainInfo = {
  title: 'Intlify',
  description: 'The Borderless Internationalization'
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
          title: 'NuxtJS',
          link: 'https://nuxtjs.org',
          logo: '/sponsors/nuxt.png'
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
      sliver: [
      ],
      bronze: [
        {
          title: 'Sendcloud',
          link: 'https://www.sendcloud.com',
          logo: '/sponsors/sendcloud.png'
        },
        {
          title: 'VueMastery',
          link: 'https://www.vuemastery.com/',
          logo: '/sponsors/vuemastery.png'
        },
        {
          title: 'DECIBEL',
          link: 'https://www.deci-bel.com/',
          logo: '/sponsors/decibel.png'
        }
      ]
    }
  }
}

module.exports = config
