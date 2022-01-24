<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineProps } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Banner, Tier } from './types'

defineProps<{
  banners: Banner[]
  tier: Tier
}>()

const { t } = useI18n({
  inheritLocale: true
})
</script>

<i18n>
{
  "en": {
    "PLATINUM": "PLATINUM",
    "SPECIAL": "SPECIAL",
    "GOLD": "GOLD",
    "SILVER": "SILVER",
    "BRONZE": "BRONZE"
  },
  "ja": {
    "PLATINUM": "プラチナ",
    "SPECIAL": "スペシャル",
    "GOLD": "ゴールド",
    "SILVER": "シルバー",
    "BRONZE": "ブロンズ"
  }
}
</i18n>

<template>
  <div class="sponsor">
    <h3 class="mb-6">
      {{ t(tier.toUpperCase()) }}
    </h3>
    <template v-for="{ link, logo, title } in banners">
      <a
        :href="link"
        :class="[tier, 'common', 'mx-4', 'mt-4']"
        :aria-label="title"
        target="_blank"
        rel="noopener"
      >
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

.platinum {
  width: 30rem;
}

.special {
  @apply w-60;
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
