# Project Log — Rete Italiana Studi Curdi

This document captures what has been done so far, the current state of the site, and how to continue without prior chat context.

## Repo & Hosting
- Repo: `andrellis/-rete-italiana-studi-curdi`
- Local path: `C:\Users\novel\Downloads\rete-curdi-repo`
- Hosting: Cloudflare Pages
- Preview URL: `https://rete-italiana-studi-curdi.pages.dev`
- English site: `https://rete-italiana-studi-curdi.pages.dev/en/`

## Stack
- Astro + Tailwind
- Content collections in `src/content` (Decap CMS)
- Admin UI: `/admin`

## Key Features Added
- Bilingual site (IT/EN) with `/en` route and language switcher
- News section + news collection + routes
- Unified homepage “Recent Updates” feed (news/events/articles/publications)
- Home sections order: Updates → About → Join
- Join section reuses “How to Join” text
- Horizontal scrolling updates feed with hover-to-scroll arrows (desktop), touch drag on mobile
- Hero images auto-fit with `object-contain` for banners

## CMS/Collections
- `articoli`, `eventi`, `pubblicazioni`, `news`, `pagine`
- English mirrors: `articoli-en`, `eventi-en`, `pubblicazioni-en`, `news-en`, `pagine-en`
- Settings: `settings`, `settings-en`
- Home: `homepage`, `homepage-en`
- Navigation: `navigation`, `navigation-en`
- Collection schema in `src/content/config.ts`

## Recent Content Added
### News
- PACO Special Issue news (IT/EN)

### Publications
- PACO introduction entry (IT/EN)
- Francesco Ventura publications (IT/EN):
  - Global Networks (2024), Geopolitics (2024), Geografiska Annaler (2025), Annals AAG (2025), Rivista Geografica Italiana (2025), Ethnic & Racial Studies (2026)
- Veronica Buffon publications (IT/EN):
  - Archivio Antropologico Mediterraneo (2024)
  - Kurdish Studies (2016) + reprint note (2024)
- PDFs stored in `public/files/publications/*.pdf` where available

### Events
- “The Kurds and the Others” (Lecce 2023) with poster
- SeSaMO panels 2022 (Rojava/AANES; Uprooting/Identity)
- SeSaMO panel 2024 (New Directions)
- SeSaMO webinar 2021 (“Riflessività ed etica…”)
- SeSaMO webinar 2024 (“La questione curda…”) with poster
- Workshop 2026 “The Transnationality of the Kurdish Freedom Movement” with poster + programme summary

### Images
- PACO banner: `public/images/paco-banner-2026.png`
- Workshop poster: `public/images/workshop-transnationality-kurdish-freedom-2026.jpg`
- Webinar poster: `public/images/webinar-sesamo-2024.jpg`
- SeSaMO posters: `public/images/locandina-sesamo-2022.jpg`, `public/images/programma-sesamo-2024.jpg`

## About Page (IT/EN)
- “Founding Committee” list remains
- “Current Members” replaced with bio cards:
  - Andrea Novellis (bio from CV)
  - Francesco Ventura (bio from doc)
  - Veronica Buffon (bio from doc)

## Homepage
Order is explicitly:
1. Recent Updates (rolling cards)
2. About
3. Join Us (How to Join content)

“Follow Us” section removed.

## Pending / Open Items
- Decide if Buffon 2024 reprint should be a separate publication entry.
- Decide if non–peer‑reviewed outputs from CVs should be added under `articoli`.
- Add Scholar/Website/LinkedIn links for Ventura/Buffon if desired.

## Build & Deploy Notes
Cloudflare Pages uses `npm run build` (Astro).
Earlier build failures were due to TS checks in inline scripts; now fixed by removing TS assertions.

## Useful Paths
- Content: `src/content`
- Images: `public/images`
- PDFs: `public/files/publications`

