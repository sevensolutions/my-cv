<template>
  <div class="rounded-3xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-ink-900">
    <div class="mb-8 flex items-center gap-3">
      <span class="grid size-11 place-items-center rounded-xl bg-accent-100 text-accent-600 dark:bg-accent-500/10 dark:text-accent-300">
        <Icon v-if="icon === 'briefcase'" name="lucide:briefcase" class="size-5" />
        <Icon v-else name="lucide:graduation-cap" class="size-5" />
      </span>
      <h3 class="text-xl font-bold text-ink-900 dark:text-white">{{ title }}</h3>
    </div>

    <ol class="relative space-y-8 border-l border-dashed border-ink-200 pl-6 dark:border-white/10">
      <li v-for="item in items" :key="item.title + item.date" class="relative">
        <span class="absolute top-1 -left-[30px] size-3 rounded-full border-2 border-white bg-accent-500 dark:border-ink-900" />
        <p class="text-xs font-semibold tracking-wide text-accent-600 uppercase dark:text-accent-400">{{ item.date }}</p>
        <h4 class="mt-1 text-base font-semibold text-ink-900 dark:text-white">{{ item.title }}</h4>
        <p v-if="item.place" class="text-sm font-medium text-ink-400">{{ item.place }}</p>
        <p v-if="item.description" class="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
          {{ item.description }}
        </p>
        <a
          v-if="item.link"
          :href="item.link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
        >
          {{ item.link.label }}
          <Icon name="lucide:external-link" class="size-3.5" />
        </a>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import type { ExperienceItem } from '~/data/portfolio'

defineProps<{
  title: string
  icon: 'briefcase' | 'graduation-cap'
  items: ExperienceItem[]
}>()
</script>
