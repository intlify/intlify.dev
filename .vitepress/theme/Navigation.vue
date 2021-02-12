<script lang="ts">
import { useI18n } from 'vue-i18n'
import { getCurrentInstance } from 'vue'
import { useImportXXX } from './foo'
import { useSiteData } from 'vitepress'

/*
const i18n = useI18n()
console.log('lsdkfjsdfi', i18n)
const siteData = useSiteData()
const locales = Object.keys(siteData.value.locales).map(k => {
  // const lang = siteData.value.locales[k].lang
  // return { locale: lang, display: lang.toUpperCase() }
  return siteData.value.locales[k].lang
})
console.log('sitedata', locales)
*/
export default {
  setup() {
    const instance = getCurrentInstance()
    console.log('instance', instance)
    console.log('instance', getCurrentInstance())
    useXXX()
    useImportXXX()
    const i18n = useI18n()
    console.log('klsdkfjsdfi', i18n)
    const siteData = useSiteData()
    const locales = Object.keys(siteData.value.locales).map(k => {
      // const lang = siteData.value.locales[k].lang
      // return { locale: lang, display: lang.toUpperCase() }
      return siteData.value.locales[k].lang
    })
    console.log('sitedata', locales) 
    return { locales }
  }
}

function useXXX() {
  console.log('useXXX', getCurrentInstance())
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
      <form>
        <select>
          <option v-for="locale in locales" :value="locale"></option>
          <option value="en-US">EN</option>
          <option value="ja-JP">JP</option>
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
</style>
