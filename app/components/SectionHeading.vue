<template>
  <div class="mb-12 max-w-2xl" :class="center ? 'mx-auto text-center' : ''">
    <Badge uppercase>{{ kicker }}</Badge>
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
