<script setup lang="ts">
import { computed } from 'vue'
import { withBase, useData } from 'vitepress'

const { frontmatter } = useData()

const heroLogo = computed(() => {
  /**
   * NOTE: frontmatter doesn't seem to have a value in it when SSR...
   */
  return frontmatter.value.heroImage || 'hero_logo.png'
})
const heroAlt = computed(() => {
  /**
   * NOTE: frontmatter doesn't seem to have a value in it when SSR...
   */
  return frontmatter.value.heroAlt || 'Intlify'
})
</script>

<template>
  <div class="inner">
    <figure class="left">
      <img class="hero-logo" :src="withBase(heroLogo)" :alt="heroAlt" />
    </figure>
    <div class="right">
      <h1 class="tagline">The Borderless<br />Internationalization</h1>
    </div>
  </div>
</template>

<style scoped>
.inner {
  @apply mx-auto max-w-screen-xl;
}

.left {
  @apply w-full text-center inline-block align-top
    md:text-right md:w-2/5;
}

.hero-logo {
  @apply float-none inline w-60 h-60
    mr-0 md:float-right md:mr-12;
}

.right {
  @apply w-full inline-block align-top md:w-3/5;
}

.tagline {
  @apply text-center font-extrabold text-4xl
    md:text-left md:my-6 md:py-6 md:text-5xl;
}
</style>
