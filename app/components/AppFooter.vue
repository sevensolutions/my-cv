<template>
  <footer class="border-t border-ink-100 dark:border-white/5">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-ink-400 sm:flex-row">
      <p>&copy; {{ new Date().getFullYear() }} Daniel Peinhopf. All rights reserved.</p>
      <div class="flex items-center gap-6">
        <NuxtLink to="/imprint" class="transition-colors hover:text-accent-600 dark:hover:text-accent-400">Imprint</NuxtLink>
        <NuxtLink to="/privacy" class="transition-colors hover:text-accent-600 dark:hover:text-accent-400">Privacy</NuxtLink>
      </div>
    </div>
  </footer>
</template>
