<template>
  <nav class="navigation">
    <div class="logo">
      <!-- eslint-disable-next-line prettier/prettier -->
      <a
        href="/"
        :aria-label="$site.title"
      >
        <!-- eslint-disable-next-line prettier/prettier -->
        <img
          :src="$withBase($themeConfig.logo)"
          :alt="$site.title"
        />
      </a>
    </div>
    <div class="menu">
      <template v-for="{ text, link } in $themeConfig.nav">
        <!-- eslint-disable-next-line prettier/prettier -->
        <a
          :href="link"
          :aria-label="text" 
        >
          {{ text }}
        </a>
      </template>
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
