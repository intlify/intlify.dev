<script setup lang="ts">
const current = new Date().getFullYear()
</script>

<template>
  <section class="py-16">
    <p class="text-white text-center">
      Released under the
      <a
        href="https://opensource.org/licenses/MIT"
        target="_blank"
        rel="noopener"
      >
        MIT License
      </a>
    </p>
    <p class="text-white text-center">
      Copyright © 2019-{{ current }} kazuya kawaguchi
    </p>
    <p class="text-white text-center">
      Logo art designed by
      <a
        href="https://www.ceroan.co.jp/"
        aria-label="ceroan LLC"
        target="_blank"
        rel="noopener"
      >
        ceroan LLC
      </a>
    </p>
  </section>
</template>
