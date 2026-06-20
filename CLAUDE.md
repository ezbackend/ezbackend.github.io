# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

GitHub Pages landing page for **EzBackend** — a backend framework. Pure static site, no build tools, no dependencies.

## Commands

- **Preview locally:** `open docs/index.html` (or any static file server, e.g. `python3 -m http.server 8000 -d docs`)
- **Publish:** Push to `main` — GitHub Pages auto-deploys from the `docs/` folder
- **No tests, no lint, no build step**

## Architecture

```
docs/           ← GitHub Pages root
  index.html    ← Single-page landing (nav → hero → install → features → CTA → footer)
  style.css     ← Dark flat theme, green accent (#22C55E), CSS custom properties, Inter font
  script.js     ← Smooth scroll for anchor links + clipboard copy for code block
  assets/       ← logo.jpeg
  .nojekyll     ← Disables Jekyll processing on GitHub Pages
```

- All sections live in one HTML file — no routing, no templating
- CSS uses `:root` custom properties for colors, spacing, and typography
- Responsive breakpoints at 768px and 480px
- Nav is sticky with backdrop blur; features grid is 3-column, collapses to 1 on mobile
- The "install" code block has a copy-to-clipboard button that strips `$ ` prompts
