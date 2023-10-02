import { default as typography } from '@tailwindcss/typography'

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './*.md', './.vitepress/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      intlify: ['"copperplate, serif"']
    },
    extend: {},
  },
  plugins: [typography()],
}

export default config

