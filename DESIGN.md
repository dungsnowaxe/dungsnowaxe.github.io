---
name: Personal CV
description: Editorial luxury bilingual CV, warm-bone light / espresso dark, burnt-orange accent
colors:
  bg: "oklch(96.8% 0.012 82)"
  surface: "oklch(94.2% 0.014 80)"
  surface-raised: "oklch(98.6% 0.01 88)"
  text: "oklch(24% 0.02 55)"
  text-secondary: "oklch(34% 0.02 58)"
  text-tertiary: "oklch(40% 0.018 60)"
  accent: "oklch(52% 0.14 47)"
  accent-strong: "oklch(46% 0.13 45)"
  accent-soft: "oklch(52% 0.14 47 / 0.1)"
  bg-dark: "oklch(16.5% 0.012 55)"
  surface-dark: "oklch(20.5% 0.014 56)"
  text-dark: "oklch(93.5% 0.012 80)"
  accent-dark: "oklch(74% 0.14 55)"
typography:
  display:
    fontFamily: "'Fraunces', Georgia, serif"
    fontSize: "clamp(2rem, 3.6vw, 2.9rem)"
    fontWeight: 560
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  hero-name:
    fontFamily: "'Fraunces', Georgia, serif"
    fontSize: "clamp(2.75rem, 6vw, 5rem)"
    fontWeight: 480
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  section-heading:
    fontFamily: "'Fraunces', Georgia, serif"
    fontSize: "clamp(1.15rem, 1.6vw, 1.35rem)"
    fontWeight: 600
    lineHeight: 1.15
  body:
    fontFamily: "'Manrope', 'Be Vietnam Pro', system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.18em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "20px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "32px"
  lg: "64px"
  xl: "96px"
icons:
  voice: "feather-stroke (1.5px, round caps) for UI; monochrome brand marks in skill pills"
  skill-tags: "self-hosted inline SVGs (src/data/brand-icons.ts), fill=currentColor, no CDN"
motion:
  entrance: "header only (opacity + 20px translate, ease-out)"
  reveal: "forbidden on all other sections"
eyebrows:
  rule: "max one mono eyebrow per page (Experience). All other headings are display."
---

# Design System: Personal CV

## 1. Overview

**Creative North Star: "Editorial Luxury"**

A warm-bone page in light, deep espresso in dark, with one desaturated burnt-orange accent carrying the entire identity. Typography carries the weight: Fraunces for display and headings, Manrope for body (Be Vietnam Pro takes body duty in Vietnamese, where diacritics stack), JetBrains Mono for data and labels. Three voices, one conversation.

The system is deliberately restrained. The resume is a sticky-rail document: identity and contact pinned left, experience flowing right, divided by hairline borders — never by padded containers or bento grids. The homepage is a photographic split: portrait left, name and links right. Interactive elements respond with small vertical shifts and border warmth, never with bounces or elastic curves.

This system explicitly rejects corporate resume templates, WordPress themes, LinkedIn PDF exports, generic section dividers, stock icons, bento-grid layouts, and gradient headlines. If it looks like a template, it has failed.

**Key Characteristics:**
- Dual-theme tonal layering (warm bone / espresso) with single warm accent
- Editorial type pairing: Fraunces display serif, Manrope body, JetBrains Mono labels
- Flat surfaces with hairline borders; shadow reserved for floating elements only
- One orchestrated entrance (header); everything else is simply present
- Print stylesheet for clean PDF export via the browser dialog

## 2. Colors

A restrained palette built on one warm accent against tinted neutrals. Burnt orange carries the identity on roughly 10% of any given screen. Every neutral is tinted toward the anchor hue — zero-chroma greys are forbidden.

### Light (canonical)
- **Bone Base** (`oklch(96.8% 0.012 82)`): Page background. Warm paper, never pure white.
- **Bone Surface** (`oklch(94.2% 0.014 80)`): Tags, contact-adjacent surfaces. One step below base.
- **Bone Raised** (`oklch(98.6% 0.01 88)`): Lightest surface; control island fill.
- **Espresso Ink** (`oklch(24% 0.02 55)`): Primary text. Never pure black.
- **Burnt Orange** (`oklch(52% 0.14 47)`): The single identity color. Links, date badges, the print button, eyebrow accents. AA on bone.

### Dark
- **Espresso Base** (`oklch(16.5% 0.012 55)`): Page background.
- **Espresso Surface** (`oklch(20.5% 0.014 56)`): One tonal step above base.
- **Bone Ink** (`oklch(93.5% 0.012 80)`): Primary text. Warm off-white.
- **Ember Orange** (`oklch(74% 0.14 55)`): Dark-theme accent. Same hue family, lifted lightness.

**The One Flame Rule.** Burnt/Ember Orange is the only saturated color on the page. If a second saturated hue enters the palette, the restraint contract is broken.

## 3. Typography

**Display Font:** Fraunces (Georgia fallback)
**Body Font:** Manrope (EN) / Be Vietnam Pro (VI), system-ui fallback
**Label Font:** JetBrains Mono (monospace fallback)

**Character:** Three distinct voices in tight coordination. Fraunces heads in roman — always `font-style: normal`, never italic. Manrope reads warm and measured for body text. JetBrains Mono marks data, labels, and metadata with mechanical precision. Vietnamese body switches to Be Vietnam Pro so stacked diacritics render natively.

### Hierarchy
- **Hero name** (Fraunces 480, clamp(2.75rem, 6vw, 5rem), line-height 1.02): The candidate's full name on the homepage. Roman, tight tracking.
- **H1** (Fraunces 560, clamp(2rem, 3.6vw, 2.9rem)): The resume identity name. Roman.
- **Section heading** (Fraunces 600, clamp(1.15rem, 1.6vw, 1.35rem)): Default for every section — Experience, About, Skills, Education. Ink color, sentence case.
- **Eyebrow variant** (JetBrains Mono 500, 0.75rem, uppercase, 0.18em tracking, with hairline rule): allowed on **one section per page maximum** — currently Experience. All other sections use the display heading.
- **Body** (Manrope 400, 0.9375rem, line-height 1.75): Paragraphs, experience details. Secondary ink. Capped at 65ch.
- **Label** (JetBrains Mono 500, 0.75rem, uppercase): Date badges, contact labels, skill-group titles, footer text.

**The Three Voices Rule.** Each font family has one job. Fraunces heads, Manrope reads, JetBrains labels. A heading set in Manrope or a label set in Fraunces means the hierarchy has collapsed.

**Typography purity.** Display type is always roman. Emphasis travels via weight, accent colour, or an underline — never via an italicised display face. Italic survives only as body-copy emphasis inside running paragraphs.

## 4. Elevation

Flat by default. Depth comes from tonal steps between surfaces, not from shadows. Hairline borders separate sections and entries without visual weight.

Floating elements (control island, print button) use the tinted ambient shadow, which carries the warm hue. Cards and content blocks never cast shadows.

## 5. Components

### Homepage hero — photographic split
- **Layout:** Two equal columns — portrait left, name + job-title eyebrow + link pills right. `100dvh` on desktop, stacked with a capped `min(48dvh, 360px)` portrait on mobile.
- **Eyebrow:** Single mono eyebrow (job title) with a 2rem accent rule. The page's one eyebrow.
- **Links:** Pill buttons, mono 0.75rem. Primary (View Resume) is a filled accent pill with a circular arrow chip; secondary links are hairline-bordered. One hover signal each (lift), no stacked effects.
- **Atmosphere:** One small accent-soft radial glow inside the content column. Single hue, low opacity — ambience, not decoration.

### Resume — sticky-rail document
- **Layout:** Fixed 320px left rail (identity, About, Skills, Education) + fluid main column (Experience, footer). Single column on mobile.
- **Experience entries:** Border-separated rows with a mono accent index (`01`, `02` …), company `h3`, role line, pill date badge, detail list with accent tick markers. No cards-in-cards.
- **Date badges:** Pill, accent-soft fill, accent text, hairline accent border, `tabular-nums`. Never interactive.

### Tags (skill chips)
- **Shape:** Full pill, compact padding, hairline border
- **Default:** Surface fill, secondary-ink mono text
- **Hover:** Fills with accent, text inverts to on-accent, lifts 1px
- **Icons:** Self-hosted monochrome brand marks (`src/data/brand-icons.ts`, inlined at build, `fill=currentColor` so they invert with the tag). No CDN, no network request, print-safe. Deliberate exception to the one-voice rule: brand logos confined to pills read as labelling, not decoration.

### Icons — one voice, one documented exception
- **Feather-stroke only:** 1.5px stroke, round caps and joins, `currentColor`. Brand marks (GitHub, LinkedIn) are drawn as stroke glyphs in the same voice — never filled brand paths beside stroked UI icons.
- **Exception:** skill pills carry small monochrome brand marks, self-hosted and inlined. Confined to one component, they read as labels.
- One library per project. No emoji as icons.

### Contact items
- Vertical stack of mono uppercase label over serif value, with a single stroke icon. Hover warms to accent — one signal.

### Print button
- Fixed bottom-right pill, accent fill, on-accent mono text with circular icon chip. Lifts on hover. Hidden in print.

### Control island
- Fixed top-right pill cluster (language + theme) over a translucent raised surface with blur. In-flow full-width bar on mobile. Purposeful glass — it floats over content, so depth communication is its job.

### Motion
- **Single entrance:** the resume header fades up once on scroll into view (opacity + 20px translate, exponential ease-out). Every other section is simply present — no universal reveal, no stagger cascade.
- Focus rings appear instantly. `prefers-reduced-motion` collapses motion to near-zero.

## 6. Do's and Don'ts

### Do:
- **Do** use Burnt/Ember Orange as the single saturated color.
- **Do** separate surfaces with tonal steps and hairline borders, never with shadows (except floating elements).
- **Do** cap body text at 65ch.
- **Do** keep display type roman — emphasis via weight, accent, or underline.
- **Do** keep one icon voice (feather-stroke) and typography-only skill tags.
- **Do** allow max one mono eyebrow per page; all other headings are Fraunces display.
- **Do** animate one entrance (header). Leave everything else still.

### Don't:
- **Don't** use a second saturated color. One flame only.
- **Don't** use zero-chroma greys. Every neutral carries the warm hue (≥ 0.005 chroma).
- **Don't** use Fraunces italic for headings or Manrope for display. The three voices stay in their lanes.
- **Don't** introduce bento grids, stock icons, filled-then-stroked icon mixes, or template-like section dividers.
- **Don't** use pure white (#fff) or pure black (#000).
- **Don't** use bounce or elastic easing curves.
- **Don't** put every section behind a scroll-triggered fade. One entrance, then stillness.
- **Don't** invent metrics, testimonials, or logos. Real numbers, placeholders marked `—`, or no proof slot.
