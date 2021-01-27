<script setup lang="ts">
import { defineProps } from 'vue'
import type { Banner } from './types'

defineProps<{
  banners: Banner[]
}>()
</script>

<template>
  <div class="project">
    <template v-for="{ link, logo, title } in banners">
      <a
        :href="link"
        :class="['common', 'mx-4', 'mt-4']"
        :aria-label="title"
        target="_blank"
        rel="noopener"
      >
        <img
          class="common"
          :src="logo"
          :alt="title"
        />
      </a>
    </template>
  </div>
</template>

<style scoped>
.common {
  @apply w-24 align-middle inline-block;
}
</style>
