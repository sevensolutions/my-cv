<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700 dark:bg-accent-500/10 dark:text-accent-300"
    :class="uppercase ? 'uppercase tracking-wider' : ''"
  >
    <Icon v-if="icon" :name="icon" class="size-3.5" />
    <slot />
  </span>
</template>

<script setup lang="ts">
defineProps<{
  /** Optional lucide icon name, e.g. 'lucide:globe'. */
  icon?: string
  /** Uppercase, letter-spaced style used for section kickers. */
  uppercase?: boolean
}>()
</script>
