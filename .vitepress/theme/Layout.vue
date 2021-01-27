<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
import Navigation from './Navigation.vue'
import Hero from './Hero.vue'
import Sponsor from './Sponsor.vue'
import Project from './Project.vue'
import Info from './Info.vue'
/* eslint-enable @typescript-eslint/no-unused-vars */
</script>

<template>
  <div class="antialiased">
    <header class="header layouts">
      <Navigation />
    </header>

    <main
      class="contents"
      aria-labelledby="main-title"
    >
      <section class="hero layouts">
        <Hero />
      </section>

      <section class="about layouts">
        <div class="inner">
          <p>
            Intlify is a project that aims to improve Developer Experience in
            software internationalization. We will aim to improve the Developer
            Experience of internationalization by providing libraries,
            frameworks, and tools that break down barriers to
            internationalization.
          </p>
          <p>
            We will also aim to improve the Localization Experience by providing
            software that is easy to localize.
          </p>
        </div>
      </section>

      <section class="sponsors layouts">
        <div class="inner">
          <h2>Sponsors</h2>
          <Sponsor
            :banners="$site.customData.sponsors.gold"
            tier="gold"
          />
          <Sponsor
            :banners="$site.customData.sponsors.sliver"
            tier="silver"
          />
          <Sponsor
            :banners="$site.customData.sponsors.bronze"
            tier="bronze"
          />
          <a
            class="button"
            href="https://github.com/sponsors/kazupon?o=esc"
          >
            Become a Supporting
          </a>
        </div>
      </section>

      <section class="projects layouts">
        <div class="inner">
          <h2>Open Source Projects</h2>
          <Project :banners="$site.customData.projects" />
          <a
            class="button"
            href="https://github.com/intlify"
          >
            See more Open Source Projects
          </a>
        </div>
      </section>
    </main>

    <footer class="footer">
      <Info />
    </footer>

    <Debug />
  </div>
</template>

<style scoped>
.layouts {
  @apply px-6 sm:px-6 xl:px-6;
}

.header {
  @apply fixed w-full h-auto bg-white;
}

.contents {
  @apply relative h-auto;
}

.hero {
  @apply pt-16;
}

.about {
  @apply py-8;
}

.about p {
  @apply py-2;
}

.sponsors {
  background-color: #f6f6f6;
  @apply text-center py-14;
}

.projects {
  @apply text-center py-14;
}

.about .inner,
.sponsors .inner,
.projects .inner {
  @apply mx-auto max-w-screen-md;
}

.sponsors h2,
.projects h2 {
  @apply text-2xl mb-6;
}

.sponsors a.button {
  @apply mx-4 mt-14 w-60;
}

.projects a.button {
  @apply mx-4 mt-14 w-72;
}

.footer {
  @apply h-auto layouts bg-gray-700;
}
</style>
