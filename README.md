# Personal CV — Astro

A modern, dark-themed bilingual personal CV built with Astro. Supports both English and Vietnamese, with print-to-PDF optimization.

🔗 **Live Demo**: [https://dungsnowaxe.github.io/personal-profile](https://dungsnowaxe.github.io/personal-profile)

---

## Features

- **Bilingual**: English (`/`) and Vietnamese (`/vi/`) versions
- **Markdown-driven**: Edit `profile.md` or `profile-vi.md` to update content — no code changes needed
- **Print-to-PDF**: Built-in "Save PDF" button with optimized A4 print stylesheet
- **Dark editorial theme**: Charcoal background with burnt orange accent
- **Responsive**: Mobile-friendly layout
- **Zero JavaScript animations**: CSS-only scroll reveals and page load animations

---

## Tech Stack

- [Astro](https://astro.build/) — Static site generator
- Pure CSS — Custom properties, no framework
- Google Fonts — Oswald, Source Serif 4, JetBrains Mono

---

## Project Structure

```
personal-cv/
├── profile.md              ← English CV source
├── profile-vi.md           ← Vietnamese CV source
├── scripts/
│   └── update-cv.js        ← Parser: markdown → JSON
├── src/
│   ├── data/
│   │   ├── cv.json         ← Generated English data
│   │   └── cv-vi.json      ← Generated Vietnamese data
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Education.astro
│   │   ├── Skills.astro
│   │   ├── Footer.astro
│   │   ├── PrintButton.astro
│   │   └── LanguageSwitcher.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── styles/
│   │   ├── global.css      ← Dark theme styles
│   │   └── print.css       ← Print/PDF optimization
│   └── pages/
│       ├── index.astro     ← English page
│       └── vi.astro        ← Vietnamese page
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Quick Start

### 1. Clone & Install

```bash
git clone git@github.com:dungsnowaxe/personal-profile.git
cd personal-profile
npm install
```

### 2. Edit Your Profile

Open **`profile.md`** (English) or **`profile-vi.md`** (Vietnamese) and fill in your details.

> **Do not change the `##` heading names** — the parser relies on them.

### 3. Update the CV Data

```bash
# Update English
npm run update-cv

# Update Vietnamese
npm run update-cv:vi

# Or both
npm run update-cv && npm run update-cv:vi
```

### 4. Develop or Build

```bash
# Dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Export to PDF

Click the **"Save PDF"** floating button (bottom-right corner) to open the browser print dialog and choose **"Save as PDF"**.

The print stylesheet automatically:
- Switches to light theme for ink efficiency
- Optimizes for A4 paper size
- Removes interactive elements
- Keeps sections flowing continuously (no unwanted page breaks)

---

## Design

- **Theme:** Dark editorial (charcoal `#0a0a0a` + burnt orange `#FF6B35`)
- **Fonts:** Oswald (display), Source Serif 4 (body), JetBrains Mono (mono)
- **Animations:** CSS-only scroll reveals and staggered page load

---

## Deployment

### GitHub Pages (Recommended)

This repo is configured for GitHub Pages deployment:

1. Go to **Settings → Pages** in your GitHub repository
2. Select **Deploy from a branch** → `main` → `/ (root)`
3. GitHub Actions will build and deploy automatically on every push

### Manual Deploy to Any Static Host

The `dist/` folder contains a fully static site. Deploy to:
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

---

## Updating Your CV

```bash
# 1. Edit profile
vim profile.md          # or profile-vi.md

# 2. Regenerate data
npm run update-cv

# 3. Build
npm run build

# 4. Commit & push
git add .
git commit -m "Update CV content"
git push origin main
```

---

## License

Feel free to fork and adapt for your own use.
