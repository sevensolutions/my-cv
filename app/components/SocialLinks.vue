<template>
  <div class="flex items-center gap-3">
    <a
      v-for="social in socials"
      :key="social.name"
      :href="social.href"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="social.name"
      class="grid size-10 place-items-center rounded-full border border-ink-200 text-ink-500 transition-all hover:-translate-y-0.5 hover:border-accent-300 hover:bg-accent-50 hover:text-accent-600 dark:border-white/10 dark:text-ink-300 dark:hover:border-accent-400/40 dark:hover:bg-accent-500/10 dark:hover:text-accent-300"
    >
      <Github v-if="social.icon === 'github'" class="size-[18px]" />
      <Instagram v-else-if="social.icon === 'instagram'" class="size-[18px]" />
      <Facebook v-else-if="social.icon === 'facebook'" class="size-[18px]" />
      <span v-else-if="social.icon === 'xing'" class="text-[13px] font-bold">X.</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { Facebook, Github, Instagram } from 'lucide-vue-next'
import { socials } from '~/data/portfolio'
</script>
