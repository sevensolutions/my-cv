<template>
  <section id="projects" class="bg-paper-100/70 py-24 dark:bg-white/[0.02]">
    <div class="mx-auto max-w-6xl px-6">
      <SectionHeading kicker="Projects" title="Recent works" description="A mix of professional work, open source contributions and hobby projects." />

      <div class="mb-10 flex flex-wrap gap-2">
        <button
          v-for="filter in filters"
          :key="filter.value"
          type="button"
          class="rounded-full px-4 py-2 text-sm font-medium transition-colors"
          :class="active === filter.value
            ? 'bg-ink-900 text-white dark:bg-white dark:text-ink-900'
            : 'bg-white text-ink-600 ring-1 ring-inset ring-ink-200 hover:bg-accent-50 hover:text-accent-700 dark:bg-white/5 dark:text-ink-300 dark:ring-white/10 dark:hover:bg-white/10'"
          @click="active = filter.value"
        >
          {{ filter.label }}
        </button>
      </div>

      <TransitionGroup
        tag="div"
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-3"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="hidden"
      >
        <button
          v-for="project in filtered"
          :key="project.slug"
          type="button"
          class="group flex flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-ink-900"
          @click="selected = project"
        >
          <div class="aspect-[4/3] w-full overflow-hidden bg-ink-100 dark:bg-white/5">
            <img
              :src="project.image"
              :alt="project.title"
              class="size-full transition-transform duration-500 group-hover:scale-105"
              :class="project.imageFit === 'contain' ? 'object-contain p-8' : 'object-cover'"
            />
          </div>
          <div class="flex flex-1 flex-col gap-2 p-5">
            <span class="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-100 px-2.5 py-1 text-xs font-semibold text-accent-700 dark:bg-accent-500/10 dark:text-accent-300">
              <Icon :name="categoryIcons[project.category]" class="size-3.5" />
              {{ categoryLabels[project.category] }}
            </span>
            <h3 class="text-base font-bold text-ink-900 dark:text-white">{{ project.title }}</h3>
            <p class="line-clamp-2 text-sm text-ink-500 dark:text-ink-400">{{ project.description[0] }}</p>
            <span class="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-accent-600 dark:text-accent-400">
              View details
              <Icon name="lucide:arrow-up-right" class="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </button>
      </TransitionGroup>
    </div>

    <ProjectModal :project="selected" @close="selected = null" />
  </section>
</template>

<script setup lang="ts">
import { categoryLabels, projects, type Project, type ProjectCategory } from '~/data/portfolio'

const categoryIcons: Record<ProjectCategory, string> = {
  webApp: 'lucide:app-window',
  mobileApp: 'lucide:smartphone',
  website: 'lucide:globe',
  electronics: 'lucide:cpu',
  openSource: 'lucide:github',
}

const filters: { label: string; value: ProjectCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  ...Object.entries(categoryLabels).map(([value, label]) => ({ label, value: value as ProjectCategory })),
]

const active = ref<ProjectCategory | 'all'>('all')
const selected = ref<Project | null>(null)

const filtered = computed(() => active.value === 'all' ? projects : projects.filter(p => p.category === active.value))
</script>
