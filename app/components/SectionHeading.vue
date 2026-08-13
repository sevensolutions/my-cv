<template>
  <div class="mb-12 max-w-2xl" :class="center ? 'mx-auto text-center' : ''">
    <span class="inline-flex items-center gap-2 rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-700 dark:bg-accent-900/40 dark:text-accent-300">
      {{ kicker }}
    </span>
    <h2 class="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl dark:text-white">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-3 text-base leading-relaxed text-ink-500 dark:text-ink-400">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  kicker: string
  title: string
  description?: string
  center?: boolean
}>()
</script>
