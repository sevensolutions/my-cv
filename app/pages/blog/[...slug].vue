<template>
  <div>
    <AppHeader />
    <main class="mx-auto max-w-3xl px-6 pt-32 pb-24">
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-sm font-medium text-accent-600 hover:text-accent-700 dark:text-accent-400">
        <Icon name="lucide:arrow-left" class="size-4" />
        Back to blog
      </NuxtLink>

      <template v-if="post">
        <p class="mt-8 text-xs font-medium tracking-wide text-ink-400 uppercase">{{ formatDate(post.date) }}</p>
        <h1 class="mt-1 text-3xl font-bold tracking-tight text-ink-900 dark:text-white">{{ post.title }}</h1>

        <div v-if="post.tags?.length" class="mt-4 flex flex-wrap gap-2">
          <Badge v-for="tag in post.tags" :key="tag">{{ tag }}</Badge>
        </div>

        <div class="legal mt-8">
          <ContentRenderer :value="post" />
        </div>
      </template>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(`blog-${route.path}`, () =>
  queryCollection('blog').path(route.path).first(),
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

useHead({ title: `${post.value.title} - Daniel Peinhopf` })
useSeoMeta({
  description: post.value.description,
  ogImage: post.value.image,
})

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>
