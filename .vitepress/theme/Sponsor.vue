<script setup lang="ts">
import { defineProps } from 'vue'
import type { Banner, Tier } from './types'

defineProps<{
  banners: Banner[]
  tier: Tier
}>()
</script>

<template>
  <div class="sponsor">
    <h3 class="mb-6">
      {{ tier.toUpperCase() }}
    </h3>
    <template v-for="{ link, logo, title } in banners">
      <a
        :href="link"
        :class="[tier, 'common', 'mx-4', 'mt-4']"
        :aria-label="title"
        target="_blank"
        rel="noopener"
      >
        <!-- eslint-disable-next-line prettier/prettier -->
        <img
          :class="tier"
          :src="logo"
          :alt="title"
        />
      </a>
    </template>
  </div>
</template>

<style scoped>
.sponsor {
  @apply mb-12;
}

.common {
  @apply align-middle inline-block;
}

.gold {
  @apply w-60;
}

.silver {
  @apply w-48;
}

.bronze {
  @apply w-36;
}
</style>
