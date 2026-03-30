# 🎮 Portfolio Improvement Plan

> **Portfolio:** Game Developer & 3D Artist  
> **Stack:** React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui  
> **Date:** March 2026

---

## Table of Contents

1. [Codebase Cleanup](#1-codebase-cleanup)
2. [SEO & Meta Improvements](#2-seo--meta-improvements)
3. [Performance Optimizations](#3-performance-optimizations)
4. [UI/UX Enhancements](#4-uiux-enhancements)
5. [Content & Personalization](#5-content--personalization)
6. [Functional Improvements](#6-functional-improvements)
7. [Accessibility (a11y)](#7-accessibility-a11y)
8. [DevOps & Deployment](#8-devops--deployment)
9. [New Features to Add](#9-new-features-to-add)
10. [Dependency Cleanup](#10-dependency-cleanup)

---

## 1. Codebase Cleanup

### 🔴 High Priority

| # | Issue | Details | File(s) | Status |
|---|-------|---------|---------|--------|
| 1.1 | **Remove default Vite `App.css`** | `src/App.css` still contains the default Vite boilerplate (`.logo`, `.logo-spin`, `.read-the-docs`, `#root` max-width). This file is not needed — all styling is done via Tailwind/`index.css`. The `#root` max-width of `1280px` and `padding: 2rem` may even be causing layout issues on your full-width sections (hero, etc.). **Delete this file entirely** or keep only what you actually need. | `src/App.css` | 🟢 Done |
| 1.2 | **Remove unused shadcn/ui components** | Lovable AI installed **40+ UI components** but you only use ~8 of them (`button`, `card`, `input`, `textarea`, `separator`, `toast`, `toaster`, `sonner`, `tooltip`). Removed 38 unused component files + `use-mobile` hook + duplicate `use-toast.ts`. Also removed 23 unused `@radix-ui/*` packages from `package.json`. | `src/components/ui/*`, `package.json` | 🟢 Done |
| 1.3 | **Remove `lovable-tagger` dev dependency** | The `lovable-tagger` plugin in `vite.config.ts` is a Lovable AI dev tool. Removed from `devDependencies` and `vite.config.ts`. | `vite.config.ts`, `package.json` | 🟢 Done |
| 1.4 | **Remove unused dependencies** | Removed 35+ unused packages: `@tanstack/react-query`, `react-hook-form`, `@hookform/resolvers`, `zod`, `recharts`, `date-fns`, `react-day-picker`, `embla-carousel-react`, `input-otp`, `react-resizable-panels`, `next-themes`, `cmdk`, `vaul`, etc. Also updated `App.tsx` to remove `QueryClientProvider` and `sonner.tsx` to remove `next-themes` import. | `package.json`, `App.tsx`, `sonner.tsx` | 🟢 Done |
| 1.5 | **Rename project in `package.json`** | Renamed from `"vite_react_shadcn_ts"` to `"mihir-portfolio"` and bumped version to `1.0.0`. | `package.json` | 🟢 Done |

### 🟡 Medium Priority

| # | Issue | Details | File(s) | Status |
|---|-------|---------|---------|--------|
| 1.6 | **Remove duplicate `--radius` declaration** | `--radius: 0.75rem` was declared twice in `:root` in `src/index.css`. Removed the duplicate. | `src/index.css` | 🟢 Done |
| 1.7 | **Remove unused `.dark` theme** | The `.dark` class theme in `index.css` was overriding the custom portfolio theme, but dark mode is never toggled. Removed entirely. | `src/index.css` | 🟢 Done |
| 1.8 | **Consolidate `scrollToSection` utility** | `scrollToSection()` was duplicated in both `Navigation.tsx` and `HeroSection.tsx`. Extracted into `src/lib/scroll.ts` and updated both components to import from there. | `Navigation.tsx`, `HeroSection.tsx`, `src/lib/scroll.ts` | 🟢 Done |

---

## 2. SEO & Meta Improvements

### 🔴 High Priority

| # | Issue | Details | File(s) | Status |
|---|-------|---------|---------|--------|
| 2.1 | **Replace Lovable OG image** | The `og:image` and `twitter:image` pointed to `https://lovable.dev/opengraph-image-p98pqg.png`. Commented out and left TODO placeholders for your own screenshot. | `index.html` | 🟢 Done |
| 2.2 | **Update `meta author`** | The author meta tag said `"Your Name"` — changed to `"Mihir Kumar"`. | `index.html` | 🟢 Done |
| 2.3 | **Add `og:url` meta tag** | Missing `og:url` — add your deployed portfolio URL. | `index.html` | 🔴 Pending |
| 2.4 | **Add a custom favicon** | Created a custom SVG gamepad favicon in the portfolio's primary cyan color (`#19C8E6`) with dark background matching the theme. | `public/favicon.svg`, `index.html` | 🟢 Done |
| 2.5 | **Add `sitemap.xml` and structured data** | For better search engine indexing, add a `sitemap.xml` in `public/` and JSON-LD structured data (Person schema) in `index.html`. | `public/sitemap.xml`, `index.html` | 🔴 Pending |

---

## 3. Performance Optimizations

### 🔴 High Priority

| # | Issue | Details | File(s) | Status |
|---|-------|---------|---------|--------|
| 3.1 | **Optimize images** | Converted all asset images to **WebP** format using sharp. Average 90%+ file size reduction (e.g., `countdown-game.png` 1675KB → 72KB WebP). Updated all imports. | `src/assets/*`, `scripts/convert-to-webp.mjs` | 🟢 Done |
| 3.2 | **Lazy load portfolio images** | Added `loading="lazy"` to all project card `<img>` elements. | `PortfolioSection.tsx` | 🟢 Done |
| 3.3 | **Add font optimization** | No custom fonts are explicitly loaded — if the system font stack is intentional, that's fine. If you want custom fonts (e.g., Inter, Space Grotesk), use `<link rel="preload">` and `font-display: swap`. | `index.html` | 🔴 Pending |

### 🟡 Medium Priority

| # | Issue | Details | File(s) | Status |
|---|-------|---------|---------|--------|
| 3.4 | **Tree-shake Lucide icons** | You import individual icons which is good, but verify the bundle doesn't include the entire library. Run `npx vite-bundle-visualizer` to check. | — | 🔴 Pending |
| 3.5 | **Code-split the page** | Consider lazy-loading sections or routes using `React.lazy()` and `Suspense`. For a single-page portfolio this is low priority, but good practice. | `App.tsx`, `Index.tsx` | 🔴 Pending |

---

## 4. UI/UX Enhancements

### 🔴 High Priority

| # | Issue | Details | File(s) | Status |
|---|-------|---------|---------|--------|
| 4.1 | **Add scroll-based animations** | Created custom `useScrollAnimation` hook using native IntersectionObserver. Applied fade-in/slide-up animations to Portfolio, About, Resume, and Contact sections. No external dependency needed. | `src/hooks/use-scroll-animation.ts`, all section components | 🟢 Done |
| 4.2 | **Add a footer** | Created Footer component with copyright, quick nav links (Home, About, Portfolio, Resume, Contact), social links (GitHub, LinkedIn, Twitter), and animated "Back to Top" button. | `src/components/Footer.tsx`, `src/pages/Index.tsx` | 🟢 Done |
| 4.3 | **Fix the 404 page styling** | `NotFound.tsx` used hardcoded Tailwind classes (`bg-gray-100`, `text-gray-600`, `text-blue-500`) that didn't match the dark portfolio theme. Updated to use design tokens (`bg-background`, `text-foreground`, `text-primary`, `bg-gradient-primary`). | `src/pages/NotFound.tsx` | 🟢 Done |
| 4.4 | **"View All Projects" button is non-functional** | Linked to itch.io profile (`https://randomdx.itch.io/`) using `asChild` with an anchor tag. | `PortfolioSection.tsx` | 🟢 Done |

### 🟡 Medium Priority

| # | Issue | Details | File(s) | Status |
|---|-------|---------|---------|--------|
| 4.5 | **Add a hero section typing effect** | Implemented a custom `useTypewriter` hook (no external dependency) that cycles through "Game Developer", "3D Artist", "Level Designer", "Blender Enthusiast" with a blinking cursor. | `HeroSection.tsx`, `src/hooks/use-typewriter.ts` | 🟢 Done |
| 4.6 | **Add project filtering/tabs** | Added filter bar with categories: All, Games, 3D Art, Cinematic. Each project has a `category` field used for filtering. Active filter uses primary color with glow. | `PortfolioSection.tsx` | 🟢 Done |
| 4.7 | **Add a skills progress/proficiency indicator** | Instead of flat skill badges, show proficiency levels with progress bars or a radar chart to make the About section more engaging. | `AboutSection.tsx` | 🔴 Pending |
| 4.8 | **Improve mobile nav animation** | Replaced abrupt show/hide with smooth CSS `max-height` + `opacity` transition (300ms ease-in-out). Also fixed duplicate `aria-current` attribute bug. | `Navigation.tsx` | 🟢 Done |
| 4.9 | **Add a dark/light mode toggle** | Your `:root` theme is dark. Add a toggle to switch between dark and light themes using `next-themes` (already installed but unused). | `Navigation.tsx`, `index.css` | 🔴 Pending |

---

## 5. Content & Personalization

### 🔴 High Priority

| # | Issue | Details | File(s) | Status |
|---|-------|---------|---------|--------|
| 5.1 | **Add a profile photo/avatar** | Added a styled gradient "MK" initials avatar in the hero section with a glowing ring. Replace with a real photo when ready. | `HeroSection.tsx` | 🟢 Done |
| 5.2 | **Fix Twitter social link** | Twitter link in `ContactSection.tsx` pointed to `"#"` (placeholder). Updated to `https://x.com/MihirKumar_dx`. | `ContactSection.tsx` | 🟢 Done |
| 5.3 | **Update CGTrader link** | The CGTrader link in `AboutSection.tsx` pointed to the generic `https://www.cgtrader.com/profile`. Updated to `https://www.cgtrader.com/designers/mihirkumar`. | `AboutSection.tsx` | 🟢 Done |
| 5.4 | **Fix broken certification link** | The Unity Certification link went to a CipherSchools 404 page. Removed the broken URL (renders as non-clickable text now). | `ResumeSection.tsx` | 🟢 Done |
| 5.5 | **Add more projects** | Added 2 new entries: "3D Asset Collection" (links to CGTrader profile) and "Nightfall - Horror Game" (game jam entry). Uses gradient placeholder backgrounds for projects without screenshots. | `PortfolioSection.tsx` | 🟢 Done |
| 5.6 | **Personalize "My Journey" text** | Rewrote journey text with personal voice — mentions growing up in Bokaro, first experience with Blender, selling on CGTrader, shipping games on itch.io/GameJolt, and game jams. | `AboutSection.tsx` | 🟢 Done |

### 🟡 Medium Priority

| # | Issue | Details | File(s) | Status |
|---|-------|---------|---------|--------|
| 5.7 | **Add a Testimonials/Reviews section** | If you have feedback from game jam collaborators, itch.io comments, or CGTrader buyers, showcase them. | New section component | 🔴 Pending |
| 5.8 | **Add a blog/articles section** | If you create devlogs, tutorials, or write about game dev, link to them. This boosts SEO and credibility. | New section or link | 🔴 Pending |

---

## 6. Functional Improvements

### 🔴 High Priority

| # | Issue | Details | File(s) | Status |
|---|-------|---------|---------|--------|
| 6.1 | **Contact form doesn't actually send emails** | Integrated **Web3Forms** API for contact form submission. Added loading state with spinner, error handling, and success/failure toasts. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your key from [web3forms.com](https://web3forms.com). | `ContactSection.tsx` | 🟢 Done |
| 6.2 | **Add form validation feedback** | Currently only checks if fields are empty. Add proper email format validation, minimum message length, and inline error messages below each field. | `ContactSection.tsx` | 🔴 Pending |
| 6.3 | **Resume download should link to actual PDF** | Updated to use a local `/resume.pdf` with a proper `download` attribute. Place your actual PDF in `public/resume.pdf`. | `ResumeSection.tsx`, `public/resume.pdf` | 🟢 Done |

---

## 7. Accessibility (a11y)

### 🟡 Medium Priority

| # | Issue | Details | File(s) | Status |
|---|-------|---------|---------|--------|
| 7.1 | **Add `alt` text for all images** | Updated portfolio images to use descriptive alt text (`"Screenshot of {project.title}"`). Projects without images show gradient placeholders with icons. | `PortfolioSection.tsx` | 🟢 Done |
| 7.2 | **Add keyboard navigation support** | Already using semantic `<button>` and `<a>` elements throughout. All interactive elements are natively focusable and navigable with Tab/Enter. | All components | 🟢 Done |
| 7.3 | **Add skip-to-content link** | Added a visually hidden "Skip to main content" link at the top of the page that becomes visible on focus. | `Index.tsx` | 🟢 Done |
| 7.4 | **Ensure sufficient color contrast** | Bumped `--muted-foreground` from `65%` to `70%` lightness for better contrast ratio against the dark background. | `index.css` | 🟢 Done |
| 7.5 | **Add `aria-current="page"` to active nav** | Added `aria-current="page"` to both desktop and mobile active nav items. | `Navigation.tsx` | 🟢 Done |

---

## 8. DevOps & Deployment

### 🔴 High Priority

| # | Issue | Details | File(s) | Status |
|---|-------|---------|---------|--------|
| 8.1 | **Deploy to a hosting platform** | If not already deployed, set up deployment on **Vercel**, **Netlify**, or **GitHub Pages** with automatic CI/CD from your GitHub repo. | — | 🔴 Pending |
| 8.2 | **Add a custom domain** | Use a custom domain (e.g., `mihirkumar.dev`) instead of a `*.vercel.app` or `*.netlify.app` subdomain. This is critical for professionalism. | — | 🔴 Pending |
| 8.3 | **Set up analytics** | Add **Google Analytics 4** or **Plausible/Umami** (privacy-friendly) to track portfolio visitors. | `index.html` or via React | 🔴 Pending |

### 🟡 Medium Priority

| # | Issue | Details | File(s) | Status |
|---|-------|---------|---------|--------|
| 8.4 | **Add `robots.txt` review** | `public/robots.txt` exists — verify it allows all crawlers and includes a sitemap reference. | `public/robots.txt` | 🔴 Pending |
| 8.5 | **Set up Lighthouse CI** | Automate Lighthouse performance/accessibility audits on every push. | GitHub Actions | 🔴 Pending |

---

## 9. New Features to Add

### 🔵 Nice to Have

| # | Feature | Details | Complexity | Status |
|---|---------|---------|------------|--------|
| 9.1 | **Project detail pages** | Instead of just linking externally, create dedicated `/project/:slug` pages with full descriptions, image galleries, tech breakdowns, and embedded videos. | Medium | 🔴 Pending |
| 9.2 | **3D model viewer** | Embed an interactive 3D model viewer using `@react-three/fiber` or `<model-viewer>` to showcase Blender models directly on the portfolio. | Medium | 🔴 Pending |
| 9.3 | **Cursor effects / particles** | Add subtle particle effects or custom cursor animations on the hero section for a game-dev vibe. Libraries: `tsparticles`, `react-particles`. | Low | 🔴 Pending |
| 9.4 | **Page transition animations** | If you add multi-page routing, add smooth page transitions with `framer-motion`'s `AnimatePresence`. | Low | 🔴 Pending |
| 9.5 | **Dark/light theme toggle** | Implement theme switching using the already-installed `next-themes` package. | Low | 🔴 Pending |
| 9.6 | **Preloader/loading screen** | Add a branded loading screen with your logo animation while assets load. | Low | 🔴 Pending |
| 9.7 | **Easter egg / mini-game** | As a game dev, hide a small interactive Easter egg (e.g., Konami code triggers a mini-game). Great conversation starter. | Fun | 🔴 Pending |

---

## 10. Dependency Cleanup

### Summary of packages to remove from `package.json`:

#### Unused `dependencies`:
```
@hookform/resolvers
@radix-ui/react-accordion
@radix-ui/react-alert-dialog
@radix-ui/react-aspect-ratio
@radix-ui/react-avatar
@radix-ui/react-checkbox
@radix-ui/react-collapsible
@radix-ui/react-context-menu
@radix-ui/react-dialog
@radix-ui/react-dropdown-menu
@radix-ui/react-hover-card
@radix-ui/react-menubar
@radix-ui/react-navigation-menu
@radix-ui/react-popover
@radix-ui/react-progress
@radix-ui/react-radio-group
@radix-ui/react-scroll-area
@radix-ui/react-select
@radix-ui/react-slider
@radix-ui/react-switch
@radix-ui/react-tabs
@radix-ui/react-toggle
@radix-ui/react-toggle-group
@tanstack/react-query
cmdk
date-fns
embla-carousel-react
input-otp
next-themes
react-day-picker
react-hook-form
react-resizable-panels
recharts
vaul
zod
```

#### Unused `devDependencies`:
```
lovable-tagger
```

> **Note:** Keep `@radix-ui/react-toast`, `@radix-ui/react-label`, `@radix-ui/react-separator`, `@radix-ui/react-slot`, `@radix-ui/react-tooltip` as they are actively used.

---

## 📋 Priority Execution Order

### Phase 1 — Quick Wins ✅ COMPLETE
- 🟢 1.1 Delete `App.css`
- 🟢 1.5 Rename project in `package.json`
- 🟢 2.1 Replace Lovable OG image
- 🟢 2.2 Fix author meta tag
- 🟢 4.3 Fix 404 page styling
- 🟢 5.2 Fix/remove Twitter placeholder link
- 🟢 5.3 Fix CGTrader profile link
- 🟢 5.4 Fix broken Unity cert link

### Phase 2 — Cleanup ✅ COMPLETE
- 🟢 1.2 Remove unused shadcn/ui components
- 🟢 1.3 Remove `lovable-tagger`
- 🟢 1.4 Remove unused npm dependencies
- 🟢 1.6 Fix duplicate `--radius`
- 🟢 1.7 Remove unused `.dark` theme
- 🟢 1.8 Consolidate `scrollToSection`
- 🟢 10 Full dependency cleanup + `npm install`

### Phase 3 — Core Improvements ✅ COMPLETE
- 🟢 3.1 Optimize images to WebP
- 🟢 3.2 Lazy load portfolio images
- 🟢 4.1 Add scroll animations (IntersectionObserver)
- 🟢 4.2 Add footer component
- 🟢 4.4 Fix "View All Projects" button
- 🟢 6.1 Integrate Web3Forms for contact form
- 🟢 6.3 Fix resume download link

### Phase 4 — Content & Polish ✅ COMPLETE
- 🟢 2.4 Custom SVG gamepad favicon
- 🟢 5.1 Add "MK" initials avatar to hero
- 🟢 5.5 Add 2 more projects (CGTrader collection + game jam entry)
- 🟢 5.6 Personalize About section journey text
- 🟢 7.1-7.5 Accessibility improvements (alt text, skip link, contrast, aria-current)

### Phase 5 — Advanced Features (Partial)
- 🟢 4.5 Typing effect on hero (custom useTypewriter hook)
- 🟢 4.6 Project filtering (All / Games / 3D Art / Cinematic)
- 🟢 4.8 Mobile nav animation (smooth max-height transition)
- 🔴 8.1 Deploy to Vercel/Netlify
- 🔴 8.2 Custom domain
- 🔴 8.3 Analytics setup
- 🔴 9.x New features (as desired)

---

## 💡 General Tips

1. **Make it personal** — The biggest weakness of Lovable AI-generated portfolios is they feel generic. Rewrite text in your own voice, add your photo, and tell your unique story.
2. **Show, don't tell** — Embed gameplay videos, GIFs of animations, and interactive 3D models instead of just static screenshots.
3. **Keep it updated** — Add new projects regularly. A stale portfolio with 3 projects signals inactivity.
4. **Get feedback** — Share with peers on r/gamedev, r/webdev, or game dev Discord servers for honest critiques.
5. **Test on mobile** — Over 50% of visitors will view on mobile. Test thoroughly on real devices.

---

*This plan was generated by analyzing the complete codebase structure, all source files, dependencies, and configuration.*

---

## 🎨 Visual Change Log (Look & Feel Only)

> Added for tracking UI style updates only (no backend/logic tasks).

### ✅ Completed Visual Changes

1. **Tactical HUD visual direction applied**
	- Introduced military-style HUD atmosphere with layered effects.
	- Added a stronger game-dev presentation style across hero and UI surfaces.

2. **Black Ops-inspired color system (Balanced preset selected)**
	- Final palette set to a BO6-style **matte black + ember orange + warm red** look.
	- Replaced previous green-heavy tactical palette.

3. **Global atmosphere effects across the entire site**
	- Added a fixed full-page atmosphere layer with:
	  - animated particle motion,
	  - smoke/fog drift,
	  - subtle HUD grid texture.
	- Ensured particles are visible in the top/hero area as well.

4. **Hero section cinematic styling upgrades**
	- Added tactical overlays (grid, smoke, vignette).
	- Added dedicated hero particles for guaranteed visible motion at the top.
	- Added a tactical status label for stronger theme identity.

5. **Project cards upgraded to tactical panels**
	- Added animated scanline effect.
	- Added corner bracket frame treatment.
	- Kept hover elevation and glow behavior.

6. **Navigation and filter tabs upgraded to HUD state styling**
	- Active/inactive tab states redesigned with tactical borders and glow.
	- Desktop and mobile navigation now follow the same HUD visual language.
	- Portfolio category filters use the same style for consistency.

### 🧭 Active Visual Baseline (Current)

- Theme: **BO6 Balanced**
- Atmosphere: **Global particles + smoke + grid**
- Cards: **Tactical brackets + scanline**
- Nav/Tabs: **HUD active-state styling**

### 📝 Restore / Rollback Points Available

- `restore-points/tactical-ui-2026-03-16`
- `restore-points/tactical-ui-phase2-2026-03-16`
