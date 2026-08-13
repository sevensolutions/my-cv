export const useDarkMode = () => {
  const isDark = useState<boolean>('isDark', () => false)

  const apply = (value: boolean) => {
    isDark.value = value
    if (import.meta.client) {
      document.documentElement.classList.toggle('dark', value)
      localStorage.setItem('theme', value ? 'dark' : 'light')
    }
  }

  const init = () => {
    if (!import.meta.client) return
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    apply(stored ? stored === 'dark' : prefersDark)
  }

  const toggle = () => apply(!isDark.value)

  return { isDark, init, toggle }
}
