/**
 @type {UserConfig['head']}
 */
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

module.exports = head
