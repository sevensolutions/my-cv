<template>
  <section id="resume" class="bg-paper-100/70 py-24 dark:bg-white/[0.02]">
    <div class="mx-auto max-w-6xl px-6">
      <SectionHeading kicker="Resume" title="Experience & education" />

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <TimelineList title="Experience" icon="briefcase" :items="experience" />
        <TimelineList title="Education" icon="graduation-cap" :items="education" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { education, experience } from '~/data/portfolio'
</script>
