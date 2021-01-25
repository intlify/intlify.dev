/** @type {UserConfig['head']} */
const head = [
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@intlify' }],
  ['meta', { name: 'twitter:url', content: 'https://intlify.dev' }],
  ['meta', { name: 'twitter:title', content: 'Intlify' }],
  [
    'meta',
    {
      name: 'twitter:description',
      content: 'The Borderless Internationalization'
    }
  ],
  [
    'meta',
    { name: 'twitter:image', content: 'https://intlify.dev/ogimage.png' }
  ],
  ['meta', { property: 'og:type', content: 'article' }],
  ['meta', { property: 'og:url', content: 'https://intlify.dev' }],
  ['meta', { property: 'og:site_name', content: 'Intlify' }],
  ['meta', { property: 'og:title', content: 'Intlify' }],
  [
    'meta',
    {
      property: 'og:description',
      content: 'The Borderless Internationalization'
    }
  ],
  ['meta', { property: 'og:image', content: 'https://intlify.dev/ogimage.png' }]
]

if (process.env.NODE_ENV === 'production') {
  head.push([
    'script',
    {
      src: 'https://unpkg.com/thesemetrics@latest',
      async: ''
    }
  ])
}

/**
 * @type {UserConfig}
 */
const config = {
  title: 'Intlify',
  description: 'The Borderless Internationalization',
  head,
  themeConfig: {
    docsBranch: 'master',
    logo: 'nav_logo.png',
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
        }
      ]
    }
  }
}

module.exports = config
