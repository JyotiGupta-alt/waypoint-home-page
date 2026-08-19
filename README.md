Waypoint
Every deploy, one timeline you can trust.
A premium home-page concept for a deploy/release-observability product, built for the "Build It
Like You Mean It" frontend challenge. The goal wasn't just centering a div — it was a page
someone would actually want an account for within three seconds of landing.
🔗 Live demo: https://tranquil-brioche-1e5b0f.netlify.app
📦 Repo: https://github.com/JyotiGupta-alt/waypoint-home-page
📝 Design decisions: DECISIONS.md
<img width="1919" height="866" alt="image" src="https://github.com/user-attachments/assets/159b268b-ac98-411c-9417-b8ea9fd27573" />

<img width="1917" height="865" alt="image" src="https://github.com/user-attachments/assets/9250504c-1cde-4d0f-9a04-816217c5d5bc" />
<img width="1917" height="875" alt="image" src="https://github.com/user-attachments/assets/398b8d3f-d702-4993-92c6-c507b2e36aaa" />

<img width="1919" height="865" alt="image" src="https://github.com/user-attachments/assets/8da6cbb3-e2fa-4f80-ae89-892e319c6311" />
<img width="1919" height="872" alt="image" src="https://github.com/user-attachments/assets/72aa3678-5b18-449e-95ed-bf3fffc97111" />

What this is
Waypoint is an invented product: a single screen that shows every deploy across every service
on one honest timeline, so "did it actually ship?" stops being a Slack thread. The home page's
signature element is a live-feeling deploy-pipeline animation — a "runner" dot traveling down a
timeline of build → canary → rollout events — used instead of a generic hero gradient, because
the subject matter (deploys, over time) already has motion built into it.
Highlights
Requirement	How it's covered
Hero + clear value prop + CTA	`Hero.jsx`
Product shown, not just claimed	`ProductDemo.jsx` — a full mock dashboard with live-looking service states
One motion element that earns its keep	The traveling pipeline "runner" (`PipelineCard.jsx`) + scroll reveals (`Reveal.jsx`)
Responsive: 390px → 1440px, no horizontal scroll	Tailwind grid breakpoints throughout; mobile hamburger nav in `Nav.jsx`
Real dark mode, all-or-nothing	Full CSS-variable token swap via `html.light` class — see `index.css`
No fabricated testimonials / user counts	None anywhere. The one number on the page (eyebrow badge) is flagged as a placeholder in DECISIONS.md
Hidden easter egg	Konami code (↑ ↑ ↓ ↓ ← → ← → b a) — `useKonami.js` + `EggToast.jsx`

Tech stack
Vite — build tooling, no framework overhead for a single page
React 19 — component split (see structure below)
Tailwind v4 — design tokens via `@theme` and CSS variables, not a fixed default palette
Framer Motion — scroll reveals and the pipeline runner animation
lucide-react — icons
Verified as of this commit: builds clean (`npm run build`) and lints clean (`npx oxlint src/`),
0 errors / 0 warnings on both.
Adding a real screenshot
This repo ships with a placeholder image reference only. To swap in a real one:
Open the live demo link above.
Screenshot the hero section (`Win+Shift+S` on Windows, `Cmd+Shift+4` on Mac).
Save it as `screenshot.png` in the project root (same folder as this file).
Commit and push — the image tag at the top of this README will pick it up automatically.
Getting started
bash
npm install
npm run dev        # http://localhost:5173

bash
npm run build       # production build → dist/
npm run preview      # serve that build locally to sanity-check it
```
Deploying
Vercel (zero-config for Vite):
```bash
npm i -g vercel
vercel --prod
```
Netlify: New site from Git → pick this repo → build command `npm run build`, publish
directory `dist` (usually auto-detected).
GitHub Pages: add `base: '/<repo-name>/'` to `vite.config.js`, then build and push `dist/`
to a `gh-pages` branch.
Project structure
```
src/
├─ App.jsx                  page assembly
├─ main.jsx                 React entry point
├─ index.css                design tokens (--bg, --accent, etc.) + Tailwind import
├─ hooks/
│  ├─ useTheme.js            dark/light mode state
│  └─ useKonami.js           bonus round: Konami-code detector
└─ components/
   ├─ Nav.jsx                 nav bar + working mobile menu
   ├─ Hero.jsx                 hero section
   ├─ PipelineCard.jsx          signature deploy-timeline animation (reused twice)
   ├─ HowItWorks.jsx             real 3-step sequence
   ├─ ProductDemo.jsx             "product, not just claims" section
   ├─ Features.jsx                 3 capability cards
   ├─ CTA.jsx                       bottom call-to-action band
   ├─ Footer.jsx
   ├─ EggToast.jsx                   easter-egg toast (Konami code)
   └─ Reveal.jsx                     shared scroll-reveal wrapper
```
Before submitting
[ ] `npm run build` with no errors
[ ] Test at 390px and 1440px widths — no horizontal scroll
[ ] Toggle dark/light mode — confirm it's a full swap, not partial
[ ] Try the Konami code for the easter egg
[ ] Replace or cut the "3 production pipelines" placeholder stat before this goes anywhere
beyond the assessment
[ ] Be ready to explain every decision in DECISIONS.md out loud — that's the actual bar
