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
          {{ yearsOfExperience }} years of practical experience — from web applications
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
        <div
          class="group relative cursor-pointer overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 p-3 shadow-2xl shadow-ink-900/10 backdrop-blur dark:border-white/10 dark:bg-white/5"
          @mouseenter="swapTo(1)"
          @mouseleave="swapTo(0)"
          @click="swapTo(active === 0 ? 1 : 0)"
        >
          <div class="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
            <img
              :src="images[0]"
              alt="Portrait of Daniel Peinhopf"
              class="absolute inset-0 size-full object-cover transition-opacity duration-150"
              :class="active === 0 ? 'opacity-100' : 'opacity-0'"
            />
            <img
              :src="images[1]"
              alt="Portrait of Daniel Peinhopf, alternate photo"
              class="absolute inset-0 size-full object-cover transition-opacity duration-150"
              :class="active === 1 ? 'opacity-100' : 'opacity-0'"
            />

            <div v-if="glitching" class="pointer-events-none absolute inset-0" aria-hidden="true">
              <span class="glitch-slice glitch-slice--r" :style="{ backgroundImage: `url(${glitchImage})` }" />
              <span class="glitch-slice glitch-slice--g" :style="{ backgroundImage: `url(${glitchImage})` }" />
              <span class="glitch-slice glitch-slice--b" :style="{ backgroundImage: `url(${glitchImage})` }" />
            </div>
          </div>
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
import { getYearsOfExperience, roles } from '~/data/portfolio'

const { text } = useTypewriter(roles)

const yearsOfExperience = getYearsOfExperience()

const images = ['/images/ProfilePicture2.jpg', '/images/ProfilePicture.jpg']

const active = ref(0)
const glitching = ref(false)
const glitchImage = ref(images[1])

let glitchOffTimer: ReturnType<typeof setTimeout> | undefined
let swapTimer: ReturnType<typeof setTimeout> | undefined

function swapTo(target: number) {
  if (target === active.value)
    return

  clearTimeout(glitchOffTimer)
  clearTimeout(swapTimer)

  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduceMotion) {
    active.value = target
    return
  }

  glitchImage.value = images[target]
  // Force the CSS animation to restart even if triggered again mid-flight.
  glitching.value = false
  requestAnimationFrame(() => {
    glitching.value = true
  })

  // Swap the underlying image partway through the glitch, so the noise masks the cut.
  swapTimer = setTimeout(() => {
    active.value = target
  }, 110)

  glitchOffTimer = setTimeout(() => {
    glitching.value = false
  }, 380)
}

onUnmounted(() => {
  clearTimeout(glitchOffTimer)
  clearTimeout(swapTimer)
})
</script>

<style scoped>
.glitch-slice {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  mix-blend-mode: screen;
  opacity: 0;
}

.glitch-slice--r {
  filter: sepia(1) saturate(8) hue-rotate(-55deg) brightness(1.1);
  animation: glitch-shift-r 0.38s steps(2, end);
}

.glitch-slice--g {
  filter: sepia(1) saturate(8) hue-rotate(70deg) brightness(1.1);
  animation: glitch-shift-g 0.38s steps(2, end);
}

.glitch-slice--b {
  filter: sepia(1) saturate(8) hue-rotate(185deg) brightness(1.1);
  animation: glitch-shift-b 0.38s steps(2, end);
}

@keyframes glitch-shift-r {
  0% { opacity: 0; clip-path: inset(12% 0 58% 0); transform: translate3d(0, 0, 0); }
  15% { opacity: 0.9; clip-path: inset(12% 0 58% 0); transform: translate3d(-6px, -2px, 0); }
  35% { opacity: 0.75; clip-path: inset(45% 0 20% 0); transform: translate3d(5px, 1px, 0); }
  55% { opacity: 0.65; clip-path: inset(0 0 75% 0); transform: translate3d(-4px, 2px, 0); }
  75% { opacity: 0.35; clip-path: inset(70% 0 5% 0); transform: translate3d(3px, -1px, 0); }
  100% { opacity: 0; clip-path: inset(0 0 0 0); transform: translate3d(0, 0, 0); }
}

@keyframes glitch-shift-g {
  0% { opacity: 0; clip-path: inset(30% 0 40% 0); transform: translate3d(0, 0, 0); }
  20% { opacity: 0.85; clip-path: inset(5% 0 80% 0); transform: translate3d(6px, 1px, 0); }
  40% { opacity: 0.7; clip-path: inset(60% 0 10% 0); transform: translate3d(-5px, -2px, 0); }
  60% { opacity: 0.55; clip-path: inset(20% 0 55% 0); transform: translate3d(4px, 2px, 0); }
  80% { opacity: 0.3; clip-path: inset(0 0 85% 0); transform: translate3d(-3px, 1px, 0); }
  100% { opacity: 0; clip-path: inset(0 0 0 0); transform: translate3d(0, 0, 0); }
}

@keyframes glitch-shift-b {
  0% { opacity: 0; clip-path: inset(50% 0 10% 0); transform: translate3d(0, 0, 0); }
  18% { opacity: 0.8; clip-path: inset(0 0 65% 0); transform: translate3d(-7px, 2px, 0); }
  38% { opacity: 0.9; clip-path: inset(35% 0 30% 0); transform: translate3d(6px, -1px, 0); }
  58% { opacity: 0.5; clip-path: inset(15% 0 60% 0); transform: translate3d(-4px, 1px, 0); }
  78% { opacity: 0.25; clip-path: inset(65% 0 0 0); transform: translate3d(3px, -2px, 0); }
  100% { opacity: 0; clip-path: inset(0 0 0 0); transform: translate3d(0, 0, 0); }
}
</style>
