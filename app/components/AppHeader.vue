<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
    :class="scrolled
      ? 'border-b border-ink-100 bg-paper-50/80 backdrop-blur-lg dark:border-white/5 dark:bg-ink-950/80'
      : 'border-b border-transparent bg-transparent'"
  >
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#home" class="text-lg font-bold tracking-tight text-ink-900 dark:text-white">
        Daniel<span class="text-accent-500">.</span>
      </a>

      <ul class="hidden items-center gap-8 text-sm font-medium text-ink-600 md:flex dark:text-ink-300">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="transition-colors hover:text-accent-600 dark:hover:text-accent-400">{{ link.label }}</a>
        </li>
      </ul>

      <div class="flex items-center gap-2">
        <button
          type="button"
          aria-label="Toggle dark mode"
          class="grid size-10 place-items-center rounded-full text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-800 dark:text-ink-300 dark:hover:bg-white/10 dark:hover:text-white"
          @click="toggle"
        >
          <Icon v-if="isDark" name="lucide:sun" size="1.2em" />
          <Icon v-else name="lucide:moon" size="1.2em" />
        </button>

        <a
          href="#contact"
          class="hidden rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-600 sm:inline-flex dark:bg-white dark:text-ink-900 dark:hover:bg-accent-400"
        >
          Get in touch
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          class="grid size-10 place-items-center rounded-full text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-800 md:hidden dark:text-ink-300 dark:hover:bg-white/10 dark:hover:text-white"
          @click="mobileOpen = !mobileOpen"
        >
          <Icon v-if="mobileOpen" name="lucide:x" size="1.2em" />
          <Icon v-else name="lucide:menu" size="1.2em" />
        </button>
      </div>
    </nav>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <ul
        v-if="mobileOpen"
        class="flex flex-col gap-1 border-t border-ink-100 bg-paper-50 px-6 py-4 text-sm font-medium text-ink-600 md:hidden dark:border-white/5 dark:bg-ink-950 dark:text-ink-300"
      >
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="block rounded-lg px-3 py-2.5 transition-colors hover:bg-ink-100 hover:text-ink-900 dark:hover:bg-white/10 dark:hover:text-white"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const links = [
  { href: '#about', label: 'About' },
  { href: '#resume', label: 'Resume' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const toggle = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
const mobileOpen = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
