# Personal CV — Astro + Vite+ + StyleX

A modern bilingual personal CV built with Astro, Vite+, Bun, and StyleX. Supports English and Vietnamese, with print-to-PDF optimization.

🔗 **Live Demo**: [https://dungsnowaxe.github.io/personal-profile](https://dungsnowaxe.github.io/personal-profile)

---

## Features

- **Bilingual**: English (`/`) and Vietnamese (`/vi/`) versions
- **Markdown-driven**: Edit `profile.md` or `profile-vi.md` to update content — no code changes needed
- **Print-to-PDF**: Built-in "Save PDF" button with optimized A4 print stylesheet
- **Editorial theme**: Warm bone / espresso with burnt orange accent (light + dark)
- **Responsive**: Mobile-friendly layout
- **Atomic CSS**: Component styles authored with StyleX

---

## Tech Stack

- [Astro](https://astro.build/) — Static site generator
- [Vite+](https://viteplus.dev/) — Unified toolchain (lint / format / check / package management)
- [Bun](https://bun.sh/) — Package manager + script runner
- [StyleX](https://stylexjs.com/) — Typed atomic styles (no Tailwind component library)
- Google Fonts — Fraunces, Manrope, Be Vietnam Pro, JetBrains Mono

---

## Quick Start

### 1. Clone & Install

```bash
git clone git@github.com:dungsnowaxe/personal-profile.git
cd personal-profile
bun install
```

Requires Node 24+ (see `.node-version`) and Bun 1.4+.

### 2. Edit Your Profile

Open **`profile.md`** (English) or **`profile-vi.md`** (Vietnamese) and fill in your details.

> **Do not change the `##` heading names** — the parser relies on them.

### 3. Update the CV Data

```bash
bun run update-cv
bun run update-cv:vi
```

### 4. Develop or Build

```bash
bun run dev
bun run build
bun run preview

# Vite+ quality checks
bun run check
```

Or via Vite+ directly: `vp run build`, `vp check`, `vp install`.

---

## Export to PDF

Click the **"Save PDF"** floating button (bottom-right) and choose **"Save as PDF"**.

---

## Deployment

GitHub Actions builds with Bun and deploys to GitHub Pages on push to `main`.

---

## License

Feel free to fork and adapt for your own use.
