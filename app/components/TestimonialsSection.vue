<template>
  <section class="mx-auto max-w-4xl px-6 py-24">
    <SectionHeading kicker="Testimonials" title="Kind words" center />

    <div
      v-for="testimonial in testimonials"
      :key="testimonial.name"
      class="relative rounded-3xl border border-ink-100 bg-white p-8 text-center shadow-sm sm:p-12 dark:border-white/10 dark:bg-ink-900"
    >
      <Quote class="mx-auto size-8 text-accent-300 dark:text-accent-600" />
      <p class="mt-6 text-lg leading-relaxed text-ink-700 italic dark:text-ink-200">
        "{{ testimonial.quote }}"
      </p>
      <div class="mt-6">
        <p class="font-semibold text-ink-900 dark:text-white">{{ testimonial.name }}</p>
        <p class="text-sm text-ink-400">{{ testimonial.company }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
import { testimonials } from '~/data/portfolio'
</script>
