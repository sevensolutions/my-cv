<template>
  <div class="rounded-3xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-ink-900">
    <div class="mb-6 flex items-center gap-3">
      <span class="grid size-11 place-items-center rounded-xl bg-accent-100 text-accent-600 dark:bg-accent-500/10 dark:text-accent-300">
        <Icon :name="`lucide:${icon}`" class="size-5" />
      </span>
      <h3 class="text-lg font-bold text-ink-900 dark:text-white">{{ title }}</h3>
    </div>

    <ul class="space-y-4">
      <li v-for="skill in skills" :key="skill.name">
        <div class="mb-1.5 flex items-center justify-between text-sm">
          <span class="font-medium text-ink-700 dark:text-ink-200">{{ skill.name }}</span>
          <span class="text-ink-400">{{ skill.value }}%</span>
        </div>
        <div class="h-2 w-full overflow-hidden rounded-full bg-ink-100 dark:bg-white/10">
          <div
            class="h-full rounded-full bg-gradient-to-r from-accent-400 to-accent-600 transition-[width] duration-700 ease-out"
            :style="{ width: barWidth(skill.name) }"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  icon: 'code' | 'globe' | 'layers'
  skills: { name: string; value: number }[]
}>()

const mounted = ref(false)
onMounted(() => {
  requestAnimationFrame(() => (mounted.value = true))
})

function barWidth(name: string) {
  if (!mounted.value) return '0%'
  return `${props.skills.find(s => s.name === name)?.value ?? 0}%`
}
</script>
