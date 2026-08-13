export function useTypewriter(words: string[], options?: { typingSpeed?: number; erasingSpeed?: number; delay?: number }) {
  const typingSpeed = options?.typingSpeed ?? 90
  const erasingSpeed = options?.erasingSpeed ?? 45
  const delay = options?.delay ?? 1800

  const text = ref('')
  let wordIndex = 0
  let charIndex = 0
  let timer: ReturnType<typeof setTimeout> | undefined

  function type() {
    const current = words[wordIndex] ?? ''
    if (charIndex < current.length) {
      charIndex += 1
      text.value = current.slice(0, charIndex)
      timer = setTimeout(type, typingSpeed)
    }
    else {
      timer = setTimeout(erase, delay)
    }
  }

  function erase() {
    if (charIndex > 0) {
      charIndex -= 1
      text.value = words[wordIndex]!.slice(0, charIndex)
      timer = setTimeout(erase, erasingSpeed)
    }
    else {
      wordIndex = (wordIndex + 1) % words.length
      timer = setTimeout(type, typingSpeed)
    }
  }

  onMounted(() => {
    timer = setTimeout(type, delay)
  })
  onUnmounted(() => clearTimeout(timer))

  return { text }
}
