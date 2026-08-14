# Portfolio — Jacob Nigh

**Live at [jacobnigh.dev](https://jacobnigh.dev)**

A single-page developer portfolio built as a mock competition **entry card**: kraft-board
background, card-stock panels, an engine-turned guilloche seal, and a die-cut tear line
above the contact footer.

## Stack

| Concern | Choice |
| --- | --- |
| Framework | React 19 |
| Language | TypeScript |
| Build | Vite 8 (`@vitejs/plugin-react`) |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` |
| Linting | ESLint 10 + `typescript-eslint` |

Tailwind v4 is configured **CSS-first** — there is no `tailwind.config.js`. All design
tokens live in the `@theme` block in `src/index.css`.

## Getting started

```bash
npm install
npm run dev
```

| Script | Does |
| --- | --- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Type-checks with `tsc -b`, then builds to `dist/` |
| `npm run lint` | ESLint across the project |
| `npm run preview` | Serves the production build locally |

Requires a current LTS Node. The lockfile was generated on Windows, so `node_modules`
contains `win32-x64-msvc` native binaries for Rolldown, Lightning CSS, and the Tailwind
oxide engine — delete `node_modules` and reinstall when moving between operating systems.

## Structure

```
src/
├── App.tsx                    Section order and outer page padding
├── main.tsx                   React root
├── index.css                  Tailwind import + @theme design tokens
├── components/
│   ├── Header.tsx             Entry-card meta line and serial number
│   ├── Hero.tsx               Name, title, positioning statement
│   ├── Projects.tsx           Project grid + background/availability grid
│   ├── Signature.tsx          Signature line, guilloche seal, tear perforation
│   └── Footer.tsx             Contact details and the two CTAs
├── data/
│   ├── projects.ts            Project entries (typed via the Project type)
│   └── info.ts                Background, education, location, availability
└── lib/
    └── hypotrochoid.ts        Guilloche path generator
```

Content is data-driven: to add or change an entry, edit `src/data/projects.ts` or
`src/data/info.ts` rather than the components. Both grids render `.slice(0, 4)`, so a
fifth item is silently dropped — widen the slice and the grid column counts together.

## Design tokens

Defined in the `@theme` block of `src/index.css` and consumed as ordinary Tailwind
utilities (`bg-card-stock`, `text-guilloche-teal`, `border-body-ink`, …).

| Token | Value | Role |
| --- | --- | --- |
| `kraft-board` | `#CFC3A4` | Page background behind the card |
| `card-stock` | `#E9DFC6` | Card panel background |
| `field-tint` | `#F6F1E4` | Text on dark fills |
| `guilloche-teal` | `#146B6B` | Links, accents, primary CTA |
| `oxblood-stamp` | `#93321F` | Seal, emphasis, undeployed status |
| `register-ink` | `#1F1B14` | Darkest ink |
| `body-ink` | `#4A4235` | Body copy and rules |
| `carbon-grey` | `#6B6252` | Secondary text |
| `field-label` | `#7A7060` | Form-label text |
| `border-rule` | `#4A4235` | Hairline grid rules |

Three families, loaded from Google Fonts in `index.html`: **Instrument Serif**
(`font-display`), **Libre Franklin** (`font-body`), **IBM Plex Mono** (`font-label`).

Grid hairlines are drawn without borders — a `bg-border-rule` parent shows through the
`gap-px` between `bg-card-stock` cells. Changing the column count doesn't disturb it.

## The guilloche seal

`src/lib/hypotrochoid.ts` generates the seal's rosette the way a rose engine lathe cuts
one. A hypotrochoid is the path traced by a pen fixed inside a circle rolling within a
larger circle:

```
x = (R − r)·cos(t) + d·cos(((R − r) / r)·t)
y = (R − r)·sin(t) − d·sin(((R − r) / r)·t)
```

The curve closes after `2π·r / gcd(R, r)` and produces `R / gcd(R, r)` lobes. `RINGS`
exports three parameter sets; `Signature.tsx` emits each as one `<path>` in `<defs>`,
then repeats it with rotated `<use>` elements — so each ring costs one path in the DOM
regardless of how many times it's stamped around the circle.

## Responsive behaviour

Mobile-first, with two breakpoints at Tailwind's defaults:

| Range | Layout |
| --- | --- |
| base (< 768px) | Single-column entries, two-column info cells, stacked header and footer |
| `md` (≥ 768px) | Two-column entries, split header/footer rows |
| `lg` (≥ 1024px) | Full four-column card |

The seal stays beside the signature at every width, scaling `80px → 104px → 124px`.

## Assets

`public/` is served at the site root. The footer's **Full Entry Packet** button links to
`/jacob-nigh-resume.pdf` — add that file to `public/` or the button will 404. There is no
favicon linked in `index.html` yet.

## Deployment

`npm run build` emits a static `dist/` directory, deployed to
[jacobnigh.dev](https://jacobnigh.dev).

Because the site is client-rendered, crawlers and link unfurlers see only the static
shell in `index.html` — keep the description and Open Graph tags there current.