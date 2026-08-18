# DECISIONS.md — Waypoint home page (Part 2, React)

**Product:** Waypoint — a deploy/release timeline for small engineering teams. Invented for
this brief. The "wow" moment is a live-feeling deploy pipeline visualization (a traveling
"runner" dot on a timeline) instead of a generic hero gradient, since the subject — deploys —
has a natural sense of motion and time.

### 1. Why this approach over the alternative I rejected?
This started as a single static HTML file (still in the earlier submission). I rebuilt it as
Vite + React + Tailwind v4 because the brief specifically asked for a "complete frontend
website," and a component-based project is the honest answer to that: `PipelineCard` is one
component reused (compact in the hero, expanded in the product-demo section) instead of the
same markup copy-pasted twice, `Reveal` is one wrapper instead of a hand-rolled
IntersectionObserver repeated per section. The trade-off is a build step — this is no longer a
drag-and-drop file, it needs `npm install` and either a build or a host that runs one (Vercel/
Netlify both do this natively from a repo).

### 2. One trade-off I made under the time limit, and what I'd do with a real week.
The "Connect your first pipeline" CTA is still decorative — no backend. With a real week I'd
wire it to an actual email-capture flow, add TypeScript (this is plain JS/JSX right now, which
was faster to write but loses prop-shape safety on components like `PipelineCard`'s step data),
and add a Playwright visual-regression test for the dark/light swap so a future CSS change
can't silently break contrast in one mode.

### 3. Where I used AI tools, and what I personally verified or changed.
I used Claude to scaffold the component split, port the original CSS design tokens into
Tailwind's `@theme`, and write the Framer Motion animation config. I personally: ran the actual
build (`npm run build`) and linter (`oxlint`) rather than assuming the generated JSX compiled —
it caught one unused prop (`compact` on `PipelineCard`) that I then removed; checked that the
stats and copy still match the original static version so nothing drifted into a fabricated
number during the port; and verified the theme toggle does a full token swap by reading through
`index.css`, not just eyeballing the rendered page.
