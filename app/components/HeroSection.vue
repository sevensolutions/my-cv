<template>
  <section id="home" class="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
    <!-- soft background blobs -->
    <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute -top-24 -left-24 size-96 rounded-full bg-accent-200/50 blur-3xl dark:bg-accent-800/20" />
      <div class="absolute top-1/3 -right-32 size-[28rem] rounded-full bg-warm-200/50 blur-3xl dark:bg-warm-500/10" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-ink-200)_1px,transparent_0)] bg-[size:28px_28px] opacity-30 dark:opacity-[0.07]" />
    </div>

    <div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <span class="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-accent-700 ring-1 ring-accent-200 dark:bg-white/5 dark:text-accent-300 dark:ring-white/10">
          <span class="size-1.5 animate-pulse rounded-full bg-emerald-500" />
          Open to interesting collaborations
        </span>

        <h1 class="mt-6 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl dark:text-white">
          Hi, I'm Daniel Peinhopf
        </h1>

        <p class="mt-4 h-9 text-xl font-semibold text-accent-600 sm:text-2xl dark:text-accent-400">
          {{ text }}<span class="animate-pulse text-accent-400">|</span>
        </p>

        <p class="mt-6 max-w-xl text-base leading-relaxed text-ink-500 dark:text-ink-400">
          A software architect, full-stack developer and tech-allrounder from Austria with over
          {{ new Date().getFullYear() - 2012 }} years of practical experience — from web applications
          and cloud infrastructure to classic Windows desktop software and electronics.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            class="inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-ink-900/10 transition-all hover:-translate-y-0.5 hover:bg-accent-600 dark:bg-white dark:text-ink-900 dark:hover:bg-accent-400"
          >
            View my work
            <Icon name="lucide:arrow-right" class="size-4" />
          </a>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 rounded-full border border-ink-200 px-6 py-3 text-sm font-semibold text-ink-700 transition-all hover:-translate-y-0.5 hover:border-accent-300 hover:text-accent-700 dark:border-white/10 dark:text-ink-200 dark:hover:border-accent-400/40 dark:hover:text-accent-300"
          >
            Contact me
          </a>
        </div>

        <div class="mt-10">
          <SocialLinks />
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-sm">
        <div class="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent-300 to-warm-300 opacity-60 blur-2xl dark:from-accent-700 dark:to-warm-600 dark:opacity-30" />
        <div class="overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 p-3 shadow-2xl shadow-ink-900/10 backdrop-blur dark:border-white/10 dark:bg-white/5">
          <img
            src="/images/ProfilePicture.jpg"
            alt="Portrait of Daniel Peinhopf"
            class="aspect-[4/5] w-full rounded-[2rem] object-cover"
          />
        </div>
        <div class="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-ink-100 bg-white px-4 py-3 shadow-xl dark:border-white/10 dark:bg-ink-900">
          <span class="grid size-9 place-items-center rounded-full bg-accent-100 text-accent-600 dark:bg-accent-500/10 dark:text-accent-300">
            <Icon name="lucide:code" class="size-4" />
          </span>
          <div class="leading-tight">
            <p class="text-sm font-semibold text-ink-900 dark:text-white">C# / .NET</p>
            <p class="text-xs text-ink-400">Favorite stack</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { roles } from '~/data/portfolio'

const { text } = useTypewriter(roles)
</script>
