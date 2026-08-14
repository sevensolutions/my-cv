<template>
  <div>
    <AppHeader />
    <main class="mx-auto max-w-3xl px-6 pt-32 pb-24">
      <NuxtLink to="/" class="inline-flex items-center gap-2 text-sm font-medium text-accent-600 hover:text-accent-700 dark:text-accent-400">
        <Icon name="lucide:arrow-left" class="size-4" />
        Back home
      </NuxtLink>

      <h1 class="mt-8 text-3xl font-bold tracking-tight text-ink-900 dark:text-white">Blog</h1>
      <p class="mt-2 text-ink-500 dark:text-ink-400">My own personal blog.</p>

      <ul v-if="posts?.length" class="mt-10 divide-y divide-ink-100 dark:divide-white/5">
        <li v-for="post in posts" :key="post.path">
          <NuxtLink :to="post.path" class="group flex items-center gap-5 py-6">
            <img
              v-if="post.image"
              :src="post.image"
              alt=""
              class="aspect-video w-32 shrink-0 rounded-lg object-cover"
            />
            <div>
              <p class="text-xs font-medium tracking-wide text-ink-400 uppercase">{{ formatDate(post.date) }}</p>
              <h2 class="mt-1 text-lg font-semibold text-ink-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">
                {{ post.title }}
              </h2>
              <p class="mt-1 text-sm text-ink-500 dark:text-ink-400">{{ post.description }}</p>
              <div v-if="post.tags?.length" class="mt-2 flex flex-wrap gap-1.5">
                <Badge v-for="tag in post.tags" :key="tag">{{ tag }}</Badge>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <p v-else class="mt-10 text-ink-500 dark:text-ink-400">No posts yet — check back soon.</p>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Blog - Daniel Peinhopf' })

const { data: posts } = await useAsyncData('blog-list', () =>
  queryCollection('blog').order('date', 'DESC').all(),
)

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>
