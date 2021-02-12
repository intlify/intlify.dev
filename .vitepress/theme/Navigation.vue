<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSiteData, useRouter } from 'vitepress'

const LOCALE_INFO = {
  en: 'English',
  ja: '日本語'
} as const

const router = useRouter()
const siteData = useSiteData()
const locales = Object.keys(siteData.value.locales).map(k => {
  const lang = siteData.value.locales[k].lang
  return { locale: lang, display: LOCALE_INFO[lang] }
})

const onChange = e => {
  router.go(e.target.value === 'en' ? '/' : `/${e.target.value}/`)
}
</script>

<template>
  <nav class="navigation">
    <div class="logo">
      <a
        :aria-label="$site.title"
        href="/"
      >
        <img
          :src="$withBase($themeConfig.logo)"
          :alt="$site.title"
        />
      </a>
    </div>
    <div class="menu">
      <template v-for="{ text, link } in $themeConfig.nav">
        <a
          :href="link"
          :aria-label="text" 
          target="_blank"
          rel="noopener"
        >
          {{ text }}
        </a>
      </template>
      <form class="locale">
        <select @change="onChange">
          <option 
            v-for="{ locale, display } in locales"
            :selected="$i18n.locale === locale"
            :value="locale"
          >
            {{ display }}
          </option>
        </select>
      </form>
    </div>
  </nav>
</template>

<style scoped>
.navigation {
  @apply flex justify-between items-center py-2 font-bold;
}

.logo a {
  @apply text-xl;
}

.logo img {
  @apply h-10;
}

.menu {
  @apply text-base text-gray-500 leading-5;
}

.menu a {
  @apply hover:text-gray-700 mr-4;
}

.menu .locale {
  @apply inline-block transition-colors duration-300
    ease-linear text-gray-700 rounded-full;
}
</style>
