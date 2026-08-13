<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="project"
        class="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-ink-950/60 p-4 backdrop-blur-sm sm:p-6"
        @click.self="$emit('close')"
      >
        <Transition
          appear
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 translate-y-4 scale-[0.98]"
          enter-to-class="opacity-100 translate-y-0 scale-100"
        >
          <div class="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-ink-900">
            <button
              type="button"
              aria-label="Close"
              class="absolute top-4 right-4 z-20 grid size-9 place-items-center rounded-full bg-white/90 text-ink-600 shadow-md transition-colors hover:bg-white hover:text-ink-900 dark:bg-ink-950/80 dark:text-ink-300 dark:hover:text-white"
              @click="$emit('close')"
            >
              <X class="size-4" />
            </button>

            <div class="group relative aspect-video w-full overflow-hidden bg-ink-100 dark:bg-white/5">
              <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                mode="out-in"
              >
                <img
                  :key="activeImage.src"
                  :src="activeImage.src"
                  :alt="project.title"
                  class="size-full"
                  :class="activeImage.fit === 'contain' ? 'object-contain p-8' : 'object-cover'"
                />
              </Transition>

              <template v-if="gallery.length > 1">
                <button
                  type="button"
                  aria-label="Previous image"
                  class="absolute top-1/2 left-3 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink-700 opacity-0 shadow-md transition-opacity group-hover:opacity-100 hover:bg-white focus-visible:opacity-100 dark:bg-ink-950/80 dark:text-ink-200"
                  @click="prev"
                >
                  <ChevronLeft class="size-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  class="absolute top-1/2 right-3 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink-700 opacity-0 shadow-md transition-opacity group-hover:opacity-100 hover:bg-white focus-visible:opacity-100 dark:bg-ink-950/80 dark:text-ink-200"
                  @click="next"
                >
                  <ChevronRight class="size-5" />
                </button>

                <span class="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-ink-950/60 px-2.5 py-1 text-xs font-medium text-white">
                  {{ activeIndex + 1 }} / {{ gallery.length }}
                </span>
              </template>
            </div>

            <div v-if="gallery.length > 1" class="flex gap-2 overflow-x-auto border-b border-ink-100 bg-paper-50 p-3 dark:border-white/10 dark:bg-white/[0.02]">
              <button
                v-for="(img, i) in gallery"
                :key="img.src"
                type="button"
                class="size-14 shrink-0 overflow-hidden rounded-xl ring-2 transition-all"
                :class="i === activeIndex ? 'ring-accent-500' : 'opacity-60 ring-transparent hover:opacity-100'"
                @click="activeIndex = i"
              >
                <img
                  :src="img.src"
                  :alt="`${project.title} thumbnail ${i + 1}`"
                  class="size-full"
                  :class="img.fit === 'contain' ? 'object-contain p-1.5' : 'object-cover'"
                />
              </button>
            </div>

            <div class="p-6 sm:p-8">
              <span class="inline-flex items-center rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700 dark:bg-accent-500/10 dark:text-accent-300">
                {{ categoryLabels[project.category] }}
              </span>
              <h3 class="mt-4 text-2xl font-bold text-ink-900 dark:text-white">{{ project.title }}</h3>

              <div class="mt-4 space-y-3 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                <p v-for="(paragraph, i) in project.description" :key="i">{{ paragraph }}</p>
              </div>

              <a
                v-if="project.link"
                :href="project.link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-6 inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600 dark:bg-white dark:text-ink-900 dark:hover:bg-accent-400"
              >
                {{ project.link.label }}
                <ExternalLink class="size-4" />
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-vue-next'
import { categoryLabels, type GalleryImage, type Project } from '~/data/portfolio'

const props = defineProps<{ project: Project | null }>()
const emit = defineEmits<{ close: [] }>()

const activeIndex = ref(0)

const gallery = computed<GalleryImage[]>(() => {
  if (!props.project) return []
  return props.project.images && props.project.images.length > 0
    ? props.project.images
    : [{ src: props.project.image, fit: props.project.imageFit }]
})

const activeImage = computed<GalleryImage>(() =>
  gallery.value[activeIndex.value] ?? { src: props.project?.image ?? '' },
)

watch(() => props.project, () => {
  activeIndex.value = 0
})

function next() {
  activeIndex.value = (activeIndex.value + 1) % gallery.value.length
}

function prev() {
  activeIndex.value = (activeIndex.value - 1 + gallery.value.length) % gallery.value.length
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
  if (gallery.value.length > 1) {
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
  }
}
onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>
