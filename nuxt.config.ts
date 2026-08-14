import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,

  modules: ['@nuxt/icon', '@nuxtjs/color-mode', '@nuxt/content'],

  css: ['~/assets/css/main.css'],

  icon: {
    // Bundle used icons at build time instead of fetching them at runtime.
    // With `ssr: true`, the default `server` provider tries to resolve icons
    // via an internal API call during SSR/prerender, which fails in this
    // setup (logged as "[Icon] failed to load icon ..."). Icons still end up
    // rendering fine client-side, but bundling avoids the failed lookups and
    // any network dependency entirely.
    provider: 'none',
    clientBundle: {
      // Static scanning only catches literal `name="lucide:..."` usages. A
      // few icon names are built dynamically from data (`app/data/portfolio.ts`,
      // SocialLinks, SkillBars, ...), so they need to be listed explicitly.
      scan: true,
      icons: [
        'lucide:app-window',
        'lucide:smartphone',
        'lucide:globe',
        'lucide:cpu',
        'lucide:github',
        'lucide:instagram',
        'lucide:facebook',
        'lucide:map-pin',
        'lucide:flag',
        'lucide:briefcase',
        'lucide:circle-off',
        'lucide:code',
        'lucide:layers',
      ],
    },
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: 'Daniel Peinhopf - Software Architect & Full-Stack Developer',
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: 'description', content: 'Daniel Peinhopf - Software Architect, Full-Stack Developer and tech-allrounder from Austria. Building web apps, DevOps tooling and open source software.' },
        { name: "format-detection", content: "telephone=no" },
      ],
    },
  },
})
