# Waypoint — React

Vite + React + Tailwind v4 + Framer Motion. Verified: builds clean (`npm run build`) and
lints clean (`npx oxlint src/`) as of this commit.

## Run it locally
```bash
npm install
npm run dev       # http://localhost:5173
```

## Build for production
```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally to sanity-check it
```

## Deploy

**Vercel (recommended for a Vite app — zero config):**
```bash
npm i -g vercel
vercel --prod
```
It auto-detects Vite and runs the build for you.

**Netlify:**
1. Push this folder to a GitHub repo
2. New site from Git → pick the repo
3. Build command: `npm run build` — Publish directory: `dist`

**GitHub Pages:**
Needs a base-path tweak since Pages serves from a subpath — add
`base: '/<repo-name>/'` to `vite.config.js`, then build and push the `dist/` folder
to a `gh-pages` branch (or use the `gh-pages` npm package).

## Project structure
```
src/
  App.jsx              — page assembly
  main.jsx              — React entry point
  index.css              — design tokens (--bg, --accent, etc.) + Tailwind import
  hooks/
    useTheme.js            — dark/light mode state
    useKonami.js            — bonus round: Konami-code detector
  components/
    Nav.jsx                  — nav bar + working mobile menu
    Hero.jsx                  — hero section
    PipelineCard.jsx            — the signature deploy-timeline animation (reused twice)
    HowItWorks.jsx                — real 3-step sequence
    ProductDemo.jsx                 — the "product, not just claims" section
    Features.jsx                      — 3 capability cards
    CTA.jsx                             — bottom call-to-action band
    Footer.jsx
    EggToast.jsx                          — easter-egg toast (Konami code)
    Reveal.jsx                              — shared scroll-reveal wrapper
```

## Before you submit
- [ ] `npm run build` with no errors (already verified once — re-run after any edits)
- [ ] Test at 390px and 1440px widths — no horizontal scroll
- [ ] Toggle dark/light mode — confirm it's a full token swap
- [ ] Try up up down down left right left right b a for the easter egg
- [ ] The "3 production pipelines" eyebrow stat is a placeholder — replace it or cut it before
      this goes anywhere beyond the assessment
