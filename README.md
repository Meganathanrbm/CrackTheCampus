# Crack The Campus landing page

A responsive, performance-first recreation of [crackthecampus.com](https://crackthecampus.com/), built for students.

- Live: https://crack-the-campus-mu.vercel.app/
- Repo: https://github.com/Meganathanrbm/CrackTheCampus

## Setup

Needs Node 20 or newer.

```bash
npm install
npm run dev       # dev server
npm run build     # production build
npm run preview   # serve the build
npm run lint
```

## Why this stack

**Framework.** React 19 with Vite. The page is static, so it doesn't need server rendering. Vite gives fast builds, code splitting and hashed asset names. Next.js would add JavaScript for features this page doesn't use.

**Styling.** Tailwind CSS v4. Design tokens sit in one file (`src/styles/theme.css`) and only the classes in use ship, about 11 kB of CSS gzipped.

**Dependencies.** Each one earns its place.

| Package | Why |
|---|---|
| `react`, `react-dom` | UI |
| `tailwindcss`, `@tailwindcss/vite` | Styling and tokens |
| `clsx`, `tailwind-merge` | `cn()` helper, so conditional classes don't clash |
| `motion` | Scroll reveal and the menu transition, loaded with `LazyMotion` and a small feature set |
| `react-icons` | Icons, imported one by one so unused ones are dropped |
| `@fontsource-variable/golos-text`, `@fontsource-variable/jetbrains-mono` | Self-hosted fonts |

There is no router, state library, form library or UI kit. The page doesn't need them.

## Architecture

```text
src/
  styles/        tokens, base, animations
  lib/           cn.js, MotionProvider.jsx
  constants/     page content and link targets
  components/
    ui/          Button, Heading, Text, Eyebrow, Badge, FeatureList, Logo, MapEmbed, LazyVideo, Reveal
    layout/      Container, Section, SectionHeader, Header, PromoBanner, Footer, PageLayout
  sections/      one folder per section, plus BelowTheFold.jsx (lazy chunk)
```

- Sections render from arrays in `constants/`, so copy, links and items change without touching components.
- Shared pieces are reused across sections and can be reused on new pages.
- Tokens use semantic names (`surface`, `fg`, `brand`), so a retheme edits one file.

## Performance

**Images.** The hero is a resized WebP (72 kB), preloaded, with set dimensions and high fetch priority. The banners, logo and video posters are WebP too (7 to 20 kB each). Every image has a width and height so nothing shifts while loading.

**Fonts.** Variable WOFF2 files, self-hosted, so there is no request to Google Fonts. The main Latin file is preloaded, the other scripts load only if the page needs them, and a system font shows until the real one arrives.

**JavaScript.** Everything below the hero is a separate chunk that loads right after it, so first-load JS is about 117 kB gzipped. `motion` runs through `LazyMotion` with only the DOM features. Icons are tree-shaken. The hero entrance is plain CSS. There is no router or extra library.

**Other.** The two Ecosystem videos (4.1 MB and 1.85 MB) load only when scrolled near, show a poster first, and don't autoplay with reduced motion. The footer map loads on click.

### Lighthouse (deployed)

| | Performance | Accessibility | Best Practices | SEO | FCP | LCP | TBT | CLS | Speed Index |
|---|---|---|---|---|---|---|---|---|---|
| Mobile | 85 | 100 | 100 | 100 | 2.0 s | 2.6 s | 260 ms | 0 | 5.9 s |
| Desktop | 100 | 100 | 100 | 100 | 0.4 s | 0.5 s | 30 ms | 0 | 0.6 s |

## Animation

Only `transform` and `opacity` animate, so nothing forces a layout recalculation.

- Hero entrance and the logo marquee use CSS keyframes.
- Scroll reveal uses `motion`'s `whileInView`, once per element.
- Hover states use CSS transitions.
- Reduced motion is respected: `MotionConfig`, a global CSS rule, a stopped marquee and no video autoplay.

## Trade-offs and decisions

- A client-rendered Vite app is simple and light, but the first paint waits for JavaScript. Pre-rendering would help on mobile.
- Splitting off the lower sections makes the first load smaller, but they appear a moment after the hero.
- `motion` adds weight over CSS-only animation. I kept it for easy scroll reveals and the menu transition.
- The prize banner sits above the navbar and has a close button. It uses a wide image from tablet width up and a compact image on phones, so there are two images to maintain.
- The self-hosted mono font costs about 40 kB but matches the original's look. JetBrains Mono is my closest guess at the original font.
- The original has no testimonials or closing call to action. I added both to cover the brief. The testimonials are sample content.
- There is no signup form, so "Sign up", "Get Started" and the Ecosystem buttons link to the live app.
- Content is static. There is no backend.

## Known limitations

- Mobile performance is 85 (LCP 2.6 s, TBT 260 ms, Speed Index 5.9 s).
- The Ecosystem videos come from the company's CDN, so their size and uptime are outside this project.
- Testimonials are placeholders.
- No automated tests, no current-section highlight in the nav, no social preview image.

## What I would do next in production

- Pre-render the page and trim the entry bundle to improve mobile Speed Index and TBT.
- Serve AVIF with `srcset` for the hero, and convert the badge PNGs to WebP.
- Re-encode the videos and host them with proper caching, or use short clips behind a play button.
- Subset fonts to Latin only.
- Replace the sample testimonials, add a real signup route and a courses page.
- Add tests, a link checker and Lighthouse CI on every deploy, plus real-user Web Vitals monitoring.
