<template>
  <section id="contact" class="mx-auto max-w-6xl px-6 py-24">
    <div class="relative overflow-hidden rounded-[2.5rem] bg-ink-900 px-8 py-16 text-center shadow-2xl sm:px-16 dark:bg-white/5">
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute -top-20 -left-20 size-72 rounded-full bg-accent-500/30 blur-3xl" />
        <div class="absolute -right-20 -bottom-20 size-72 rounded-full bg-warm-400/20 blur-3xl" />
      </div>

      <div class="relative">
        <span class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-accent-200 uppercase tracking-wider">
          Get in touch
        </span>
        <h2 class="mx-auto mt-5 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Let's build something great together
        </h2>
        <p class="mx-auto mt-4 max-w-md text-base text-ink-300">
          Feel free to reach out for collaborations, questions, or just to say hi.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:contact@danielpeinhopf.com"
            class="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-900 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-accent-200"
          >
            <Mail class="size-4" />
            contact@danielpeinhopf.com
          </a>
        </div>

        <div class="mt-10 flex justify-center gap-3">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.name"
            class="grid size-10 place-items-center rounded-full border border-white/15 text-ink-300 transition-all hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
          >
            <Github v-if="social.icon === 'github'" class="size-[18px]" />
            <Instagram v-else-if="social.icon === 'instagram'" class="size-[18px]" />
            <Facebook v-else-if="social.icon === 'facebook'" class="size-[18px]" />
            <span v-else-if="social.icon === 'xing'" class="text-[13px] font-bold">X.</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Facebook, Github, Instagram, Mail } from 'lucide-vue-next'
import { socials } from '~/data/portfolio'
</script>
