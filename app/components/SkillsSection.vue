<template>
  <section id="skills" class="mx-auto max-w-6xl px-6 py-24">
    <SectionHeading kicker="Skills" title="What I work with" description="A snapshot of the languages, frameworks and tools I use most." />

    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <SkillBars title="Coding" icon="code" :skills="codingSkills" />
      <SkillBars title="Frameworks" icon="layers" :skills="frameworkSkills" />
      <SkillBars title="Languages" icon="globe" :skills="languageSkills" />

      <div class="rounded-3xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-ink-900">
        <div class="mb-6 flex items-center gap-3">
          <span class="grid size-11 place-items-center rounded-xl bg-accent-100 text-accent-600 dark:bg-accent-500/10 dark:text-accent-300">
            <Icon name="lucide:book-open" class="size-5" />
          </span>
          <h3 class="text-lg font-bold text-ink-900 dark:text-white">Knowledge</h3>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="item in knowledge"
            :key="item"
            class="rounded-full bg-paper-100 px-3.5 py-1.5 text-sm font-medium text-ink-600 ring-1 ring-inset ring-ink-100 dark:bg-white/5 dark:text-ink-300 dark:ring-white/10"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { codingSkills, frameworkSkills, knowledge, languageSkills } from '~/data/portfolio'
</script>
