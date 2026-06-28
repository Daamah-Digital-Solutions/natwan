# Design System — Natwan Group

> The rule that matters most: **new pages reuse the tokens, shared chrome, and patterns below — never hardcode raw hex colors, and add new section styling as page-scoped CSS (see "Architecture").** This is what keeps every page faithful to the original cinematic design and working in both LTR and RTL.

## Stack
- Vite + React (JavaScript)
- Tailwind v4 (CSS-first; design tokens in `src/index.css` under `@theme`)
- react-router v7 (routes in `src/router.jsx`, shared shell in `components/layout/Layout`)
- Bilingual EN/AR with full RTL support

## Architecture (read this before adding a page)

This project was converted from a set of bespoke, hand-authored HTML pages whose visual richness lives in large per-page stylesheets. To preserve that fidelity **and** avoid class-name collisions between pages (several pages legitimately reuse class names like `.hero`, `.intro`, `.btn` with *different* rules), the CSS is organized as:

- **Global tokens & primitives** — `src/index.css`: the `@theme` tokens, the full `:root` variable set, reset, keyframes, and the global `[dir="rtl"]` overrides.
- **Shared chrome** — `src/styles/layout.css`: header, footer, brand, nav, language switch, mobile menu, breadcrumb. Loaded once via `Layout`.
- **Page-scoped section CSS** — `src/styles/{home,about,sectors,faq,contact}.css`: every rule is nested under a single root class (`.page-home`, `.page-about`, …). Each page component renders that root class on its outermost element and imports its own stylesheet.

So a new "Services" page would get a `.page-services` root class, a `src/styles/services.css` with all its rules nested under `.page-services { … }`, and an `import "../styles/services.css"` in the page component. Nesting is compiled by Tailwind/Lightning CSS.

## Color tokens
Defined in `@theme`, usable as Tailwind utilities (`bg-forest`, `text-sand`, `bg-cream`, …) **and** as CSS variables (`var(--color-forest)`) inside scoped stylesheets.

| Token | Value | Role |
|---|---|---|
| `--color-forest` | `#264726` | Primary brand green |
| `--color-forest-mid` | `#2f5a2f` | Lighter green accents |
| `--color-forest-deep` | `#1a311a` | Deep section backgrounds |
| `--color-forest-darker` | `#11210f` | Darker green layer |
| `--color-forest-pitch` | `#0a160a` | Near-black hero / menu bg |
| `--color-sand` | `#FFDFA7` | Primary gold — text on dark, CTAs |
| `--color-sand-light` | `#fff0d1` | Light gold hover |
| `--color-sand-pale` | `#fff5e0` | Palest gold |
| `--color-sand-deep` | `#d4b070` | Gold for small labels / numbers |
| `--color-sand-mute` | `#b89760` | Muted gold |
| `--color-sand-shadow` | `#8f7445` | Darkest gold |
| `--color-cream` | `#fbf8f1` | Primary light page background |
| `--color-cream-soft` | `#f7f3ea` | Soft cream panels |
| `--color-paper` | `#f1ece0` | Paper-toned sections |
| `--color-paper-deep` | `#e8e1cf` | Deeper paper / borders |
| `--color-ink` | `#1a1a1a` | Primary text on light |

Additional derived line/overlay variables (e.g. `--line-sand`, `--line-sand-mid`, `--ease-out`, `--ease-spring`, `--gutter`, `--max`) live in the global `:root` in `index.css`. Reuse them; do not re-invent magic numbers.

## Typography
| Token | Family | Use |
|---|---|---|
| `--font-display` | Fraunces (serif) | Headings, hero type, large numerals |
| `--font-body` | Inter | Body text |
| `--font-arabic` | IBM Plex Sans Arabic | Auto-applied to headings/body under `[dir="rtl"]` |
| `--font-mono` | JetBrains Mono | Eyebrows, labels, numbers, section markers |

Type scale is fluid via `clamp()` in the scoped stylesheets (hero headings ~`clamp(40px, 9vw, 120px)`; section headings ~`clamp(32px, 5vw, 64px)`). Reuse the existing patterns rather than introducing new sizes.

## Layout
- Container max width: `var(--max)` (≈ 1400px), centered, with `var(--gutter)` horizontal padding.
- Sections alternate `dark` (forest) and `light` (cream/paper) themes via a class on the `<section>`.
- Breakpoints: nav collapses to the mobile menu ≤ 1180px; secondary tweaks at ≤ 980px and ≤ 600px.

## Components
Shared, reuse before writing new markup:

| Component | Path | Notes |
|---|---|---|
| Layout | `components/layout/Layout` | Shell: ScrollToTop + Header + `<Outlet />` + Footer |
| Header | `components/layout/Header` | Scroll-aware; desktop nav + hamburger/overlay mobile menu; language toggle |
| Footer | `components/layout/Footer` | Bilingual, router-aware links |
| Breadcrumb | `components/ui/Breadcrumb` | Sub-page hero breadcrumb (`Home / <current>`) |
| Reveal | `components/ui/Reveal` | IntersectionObserver scroll-reveal wrapper; respects reduced-motion; props `as`, `delay`, `className` |
| icons | `components/ui/icons` | `BrandMark`, `ArrowDiag`, `ArrowRight`, `Check` |
| Rich | `i18n/Rich` | Renders `*emphasis*` → `<em>` and `\n` → `<br/>` inside copy strings |

Utilities: `lib/scroll.js` → `scrollToId(id, offset)` for in-page anchor scrolling (used by the Sectors hero-nav and FAQ category nav).

## Internationalization (EN / AR)
- `i18n/LanguageProvider` holds `lang`/`dir`, persists to `localStorage` (`natwan-lang`), and sets `document.documentElement.lang` + `dir`.
- In a component: `const c = useContent(bundle)` returns the active-language object; `useLang()` exposes `lang`, `dir`, `toggle`.
- **All copy lives in `src/content/*.js`** as parallel `en` / `ar` objects — never inline visible text in JSX. Emphasis is encoded with `*asterisks*` and rendered through `<Rich>`.

## RTL rules (important)
- The global `[dir="rtl"]` block in `index.css` swaps in the Arabic font, flips directional arrow icons (`transform: scaleX(-1)`), and isolates numeric/`lang-switch` runs as LTR (`direction: ltr; unicode-bidi: isolate`).
- **In scoped stylesheets, always use logical CSS properties** so layout mirrors automatically: `padding-inline-start/-end`, `margin-inline-*`, `inset-inline-*`, `text-align: start/end`, `border-inline-*`. **Never** use physical `left`/`right`/`padding-left`/`text-align: left`. The conversion pipeline enforced this; keep it that way for new pages.

## Adding a new page
1. Create `src/content/<name>.js` with `en` and `ar` objects.
2. Create `src/styles/<name>.css` with all rules nested under `.page-<name> { … }` (use tokens + logical properties only).
3. Create `src/pages/<Name>.jsx`: outer element `className="page-<name>"`, `import "../styles/<name>.css"`, drive content via `useContent` + `<Rich>`, reuse `Reveal`, `Breadcrumb`, `icons`.
4. Register a child route in `src/router.jsx`, and add a nav entry in `src/content/ui.js` if it belongs in the header/footer.
