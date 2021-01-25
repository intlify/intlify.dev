<template>
  <section class="py-16">
    <p class="text-white text-center">
      {{ $frontmatter.license }}
    </p>
    <p class="text-white text-center">
      {{ $frontmatter.copyright }}
    </p>
    <p class="text-white text-center">
      Logo art designed by
      <!-- eslint-disable-next-line prettier/prettier -->
      <a
        href="https://www.ceroan.co.jp/"
        aria-label="ceroan LLC"
        target="_blank"
      >
        ceroan LLC
      </a>
    </p>
  </section>
</template>
