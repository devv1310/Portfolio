# Devanshu Vishwakarma — Portfolio

Scrollytelling personal portfolio built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, and Framer Motion. The hero section scrubs through a WebP image
sequence on an HTML5 Canvas as the user scrolls, with parallax text overlays
synced to scroll progress.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Adding your image sequence

Place your WebP frames in `public/sequence/`, named:

```
frame_00_delay-0.067s.webp
frame_01_delay-0.067s.webp
...
frame_89_delay-0.067s.webp
```

`FRAME_COUNT` in `components/ScrollyCanvas.tsx` controls how many frames are
loaded (currently 90, i.e. frame_00 to frame_89). Update it if your sequence
has a different number of frames.

## Structure

```
app/
  layout.tsx       — root layout, Inter font, metadata
  page.tsx          — assembles Nav, ScrollyCanvas, About, Projects, Footer
  globals.css       — global background (#121212), grain overlay
components/
  ScrollyCanvas.tsx — sticky 500vh canvas scrollytelling component
  Overlay.tsx        — 3 parallax text sections synced to scroll progress
  About.tsx          — bio + skill chips
  Projects.tsx        — glass-morphism project grid
  Nav.tsx             — fixed nav bar
  Footer.tsx          — contact / footer
public/
  sequence/           — your WebP frame sequence goes here
```

## Notes

- The canvas draws frames using `object-fit: cover` math so it looks correct
  on any aspect ratio (mobile portrait through desktop ultrawide).
- All frames are preloaded in a `useEffect` before the canvas becomes
  interactive, with a progress indicator shown while loading, to avoid
  flicker/white flashes when scrubbing.
- Background is locked to `#121212` everywhere (body, canvas fallback fill)
  so frame edges blend seamlessly with the page.
- Replace the placeholder email/GitHub/LinkedIn links in `Footer.tsx` and
  `Nav.tsx` with your real links.
- Swap project copy in `Projects.tsx` with case-study links once you have
  them, and consider adding real screenshots/covers per card.
