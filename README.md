# Natwan Group — Website

Bilingual (English / Arabic) marketing site for Natwan Group, a diversified investment
holding. Converted from the original static HTML designs into a single
**Vite + React + Tailwind v4** project with full RTL support, preserving the original
cinematic look pixel-for-pixel.

## Pages
| Route | Page |
|---|---|
| `/` | Home (single-page landing: hero, about, values, sectors, methodology, portfolio, why, vision, chairman, contact) |
| `/about` | About (story, timeline, vision & mission, values, approach, chairman, numbers, CTA) |
| `/sectors` | Sectors (5 sector layouts + in-page nav) |
| `/faq` | FAQ (4 categories, 18 Q&As, accordion + sticky category scrollspy) |
| `/contact` | Contact (contact form, channels, map block) |

## Getting started
```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

Requires Node 18+.

## Tech & structure
- **Vite + React 19**, routing via **react-router v7** (`src/router.jsx`).
- **Tailwind v4** (CSS-first). Design tokens live in `src/index.css` under `@theme`.
- **Bilingual EN/AR**: `src/i18n/LanguageProvider` drives `<html lang/dir>` and persists the
  choice to `localStorage`. All copy lives in `src/content/*.js` as parallel `en`/`ar` objects.
- **RTL**: layout uses logical CSS properties so it mirrors automatically; a global
  `[dir="rtl"]` block swaps the Arabic font and flips directional icons.
- **Responsive**: desktop nav collapses into a hamburger + full-screen overlay menu below 1180px.

```
src/
  main.jsx, router.jsx
  index.css                # @theme tokens, :root vars, reset, keyframes, RTL block
  i18n/                    # LanguageProvider, Rich (emphasis renderer)
  content/                 # bilingual copy per page + shared ui.js
  components/layout/        # Layout, Header, Footer
  components/ui/            # Reveal, Breadcrumb, icons
  lib/scroll.js            # smooth in-page anchor scrolling
  pages/                   # Home, About, Sectors, Faq, Contact
  styles/                  # layout.css (shared chrome) + page-scoped CSS
```

See **STYLE.md** for the design-system reference and the procedure for adding new pages.

## Notes / placeholders to fill before launch
- Contact details (phone, WhatsApp, email, full address) are placeholders in
  `src/content/contact.js` and `faq.js` — shown as `[ … ]`.
- The contact form currently shows a confirmation alert on submit
  (`Contact.jsx` → `onSubmit`); wire it to your backend or email service.
- Imagery uses remote Unsplash URLs; swap for final brand photography when available.
- Chairman name/signature and a downloadable company profile are placeholders.
