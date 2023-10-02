<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useData, withBase } from 'vitepress'

const LOCALE_INFO: Record<string, string> = {
  en: 'English',
  ja: '日本語'
}

const router = useRouter()
const { site, theme, page } = useData<{
  logo: string
  nav: { text: string; link: string }[]
}>()

const _locales = Object.keys(site.value.locales)
  .map(k => site.value.locales[k].lang)
  .filter(Boolean) as string[]
const locales = _locales.map(lang => ({
  locale: lang,
  display: LOCALE_INFO[lang]
}))

const siteLogo = computed(() => {
  return site.value.themeConfig.logo
})

const siteNav = computed(() => {
  return site.value.themeConfig.nav
})

const onChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  router.go(target.value === 'en' ? '/' : `/${target.value}`)
}
</script>

<template>
  <nav class="navigation">
    <div class="logo">
      <a :aria-label="site.title" href="/">
        <img :src="withBase(siteLogo)" :alt="site.title" />
      </a>
    </div>
    <div class="menu">
      <template v-for="{ text, link } in siteNav">
        <a :href="link" :aria-label="text" target="_blank" rel="noopener">
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
