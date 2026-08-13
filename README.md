# My Website

Source code for [Daniel Peinhopf's](https://github.com/sevensolutions) personal CV / portfolio site, built with [Nuxt](https://nuxt.com) and [Tailwind CSS](https://tailwindcss.com), deployed to [Cloudflare Pages](https://pages.cloudflare.com).

## Prerequisites

- [Bun](https://bun.sh)

This project uses Bun exclusively — there are no `npm`/`yarn`/`pnpm` lockfiles, so please stick to `bun` for all commands below.

## Setup

Install dependencies:

```bash
bun install
```

## Development

Start the dev server on `http://localhost:3000`:

```bash
bun run dev
```

## Production

Build the static site (output goes to `.output/public`, symlinked as `dist`):

```bash
bun run build
```

## Deployment

The site is deployed to Cloudflare Pages via [Wrangler](https://developers.cloudflare.com/workers/wrangler/):

```bash
# Serve the built site through Cloudflare Pages' local dev proxy
bun run pages:dev

# Build and deploy to Cloudflare Pages
bun run pages:deploy
```

## Project structure

- `app/components` — Vue components for each section of the CV (hero, about, skills, resume, projects, testimonials, contact, …)
- `app/data/portfolio.ts` — content for the site (profile info, skills, resume entries, projects, testimonials, etc.)
- `app/pages` — route pages
- `public` — static assets (favicons, images)

To update the CV content, edit `app/data/portfolio.ts`.
