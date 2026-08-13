<template>
  <section id="about" class="mx-auto max-w-6xl px-6 py-24">
    <SectionHeading kicker="About me" title="A bit about who I am" />

    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="space-y-5 text-base leading-relaxed text-ink-600 dark:text-ink-300">
        <p>
          I'm Daniel Peinhopf, a software architect, full-stack developer and tech-allrounder with over
          {{ yearsOfExperience }} years of practical experience. I work on a wide variety
          of projects. Some small but also some really big ones. I'm currently focused on web applications,
          though I also have deep knowledge of classic Windows desktop applications built on
          client-server architectures.
        </p>
        <p>
          <span class="font-semibold text-ink-800 dark:text-white">C# is definitely one of my favorite
            programming languages</span>, but I also code in several others. I contribute to multiple
          open source projects and maintain a few of my own on GitHub.
        </p>
        <p>
          Beyond programming, I really enjoy designing and producing electronic circuits, like my own
          SmartHome server called <i>AutomationS</i>.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="fact in facts"
          :key="fact.label"
          class="rounded-2xl border border-ink-100 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1 dark:border-white/10 dark:bg-ink-900"
        >
          <span class="grid size-10 place-items-center rounded-xl bg-accent-100 text-accent-600 dark:bg-accent-500/10 dark:text-accent-300">
            <Icon :name="`lucide:${fact.icon}`" size="1.2em" />
          </span>
          <p class="mt-3 text-sm text-ink-400">{{ fact.label }}</p>
          <p class="text-base font-semibold text-ink-900 dark:text-white">{{ fact.value }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { facts, getYearsOfExperience } from '~/data/portfolio'

const yearsOfExperience = getYearsOfExperience()
</script>
