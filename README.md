# Portfolio — Lucas Ribotta

Personal site of Lucas Ribotta, Mobile Product Engineer.

Live: https://lucasr-dev.vercel.app

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4. No UI library, no
animation library — every component is local, animation is CSS plus one
`IntersectionObserver`.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run start
npm run typecheck
npm run lint
```

## Structure

```
app/
  [locale]/            root layout, page, OG image, 404 — one route per locale
  sitemap.ts robots.ts icon.svg
proxy.ts               / → /en
content/
  en.ts es.ts          all copy, both typed against Dictionary
  types.ts             the Dictionary contract
  work.ts              featured projects (locale-independent data)
  experience.ts        timeline entries
  stack.ts             technology groups
components/
  layout/              Nav, Footer, LocaleSwitch, Backdrop
  sections/            Hero, Capabilities, Work, Experience, About, Stack, Contact
  ui/                  Section, Reveal, DeviceFrame, CopyEmail, Icons
lib/
  site.ts              URL, locales, links, CV, section ids
  format.ts            locale-aware period formatting
```

Copy lives in `content/`, never inside components. `es.ts` and `en.ts` are both typed as
`Dictionary`, so a missing translation is a build error.

## Editing content

- **Copy** — `content/en.ts` and `content/es.ts`.
- **Featured projects** — `content/work.ts` for data (name, status, stack, visual),
  the `work.projects` key of each dictionary for the writing. Paid roles appear here only
  as an engineering case study with no client detail; the role itself belongs in Experience.
- **Side projects** — `sideProjects` in `content/work.ts` plus `work.also.items` in each
  dictionary. This row is for work outside the mobile track that has a public link.
- **Experience** — `content/experience.ts`. Dates are `YYYY-MM`; `end: null` renders as
  "Present" / "Presente". `featured: true` gives an entry the highlighted treatment.
- **Stack** — `content/stack.ts` for the technologies, `stack.groups` in each dictionary
  for the group labels.
- **Links, CV and site URL** — `lib/site.ts`. The CV is a public Google Drive file, opened in a new tab.

## Project visuals

Every case study can carry one of two visuals in the column beside the copy, or none at
all — without one the case study runs full width.

**A screenshot gallery.** The phone mockup opens a modal with the same silhouette
expanded, arrow keys, thumbnails and Escape to close.

```ts
// content/work.ts
visual: { kind: "gallery", images: ["/work/cielo/sky.webp", "/work/cielo/log.webp"] }
```

Captions live in each dictionary under the project's `shots`, in the same order as
`images`. The frame's screen is 9:20, so a raw phone capture (1080×2400) fits with no
crop. Downscale to 720px wide and save as WebP before committing — a raw PNG capture is
~3 MB, the WebP is ~45 KB and `next/image` serves an even smaller variant.

**A schematic.** For products with nothing honest to screenshot. `visual: { kind: "flow" }`
renders the `flow` nodes from the dictionary as a vertical diagram; add
`bidirectional: true` when the link between nodes goes both ways.

## Deployment

Vercel, from `main`. `SITE_URL` in `lib/site.ts` drives canonical URLs, hreflang, the
sitemap and the OpenGraph image — change it there when the domain changes.
