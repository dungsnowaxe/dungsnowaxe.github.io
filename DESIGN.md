---
name: Personal CV
description: Dark editorial bilingual CV with burnt orange accent
colors:
  forge-orange: "#FF6B35"
  forge-orange-soft: "#FF6B3526"
  charcoal-base: "#0a0a0a"
  carbon-surface: "#141414"
  raised-carbon: "#1a1a1a"
  warm-bone: "#F5F5F0"
  iron-gray: "#888888"
  ghost-border: "#F5F5F014"
typography:
  display:
    fontFamily: "'Oswald', sans-serif"
    fontSize: "clamp(3rem, 10vw, 7rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.02em"
  headline:
    fontFamily: "'Oswald', sans-serif"
    fontSize: "clamp(1.5rem, 4vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.02em"
  title:
    fontFamily: "'Oswald', sans-serif"
    fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.02em"
  body:
    fontFamily: "'Source Serif 4', serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "0.8rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "32px"
  lg: "64px"
  xl: "96px"
  2xl: "128px"
components:
  tag:
    backgroundColor: "{colors.forge-orange-soft}"
    textColor: "{colors.forge-orange}"
    rounded: "{rounded.sm}"
    padding: "6px 13px"
  tag-hover:
    backgroundColor: "{colors.forge-orange}"
    textColor: "{colors.charcoal-base}"
  card:
    backgroundColor: "{colors.carbon-surface}"
    textColor: "{colors.warm-bone}"
    rounded: "{rounded.sm}"
    padding: "32px"
  print-button:
    backgroundColor: "{colors.forge-orange}"
    textColor: "{colors.charcoal-base}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
  date-badge:
    backgroundColor: "{colors.forge-orange-soft}"
    textColor: "{colors.forge-orange}"
    rounded: "{rounded.sm}"
    padding: "5px 11px"
  contact-item:
    backgroundColor: "{colors.carbon-surface}"
    textColor: "{colors.warm-bone}"
    rounded: "{rounded.sm}"
    padding: "16px"
  lang-switcher:
    backgroundColor: "{colors.carbon-surface}"
    textColor: "{colors.iron-gray}"
    rounded: "{rounded.sm}"
    padding: "6px 11px"
---

# Design System: Personal CV

## 1. Overview

**Creative North Star: "The Night Workshop"**

A dark work surface where every tool has its place and nothing is left out by accident. The charcoal ground absorbs distraction; Forge Orange marks what matters. Typography carries the weight: Oswald for structure and headings, Source Serif 4 for readable body text, JetBrains Mono for data and labels. Three voices, one conversation.

The system is deliberately restrained. Sections divide by thin hairline borders, not padded containers. Spacing follows a doubling scale (8, 16, 32, 64, 96, 128px) that creates clear rhythm without monotony. Interactive elements respond with small vertical shifts and border warmth, never with bounces or elastic curves. The page feels like a well-organized workbench at night: focused, warm at the edges, precise at the center.

This system explicitly rejects corporate resume templates, WordPress themes, LinkedIn PDF exports, generic section dividers, stock icons, and bento-grid layouts. If it looks like a template, it has failed.

**Key Characteristics:**
- Dark tonal layering (three charcoal steps) with single warm accent
- Editorial type pairing: condensed sans display, serif body, monospace labels
- Flat surfaces with hairline borders; shadow reserved for floating elements only
- Responsive and tactile: hover states lift, borders warm, tags invert
- Print stylesheet inverts to light theme for ink efficiency

## 2. Colors

A restrained palette built on one warm accent against cool charcoal neutrals. Forge Orange carries the entire identity on roughly 10% of any given screen. The rest is tonal carbon.

### Primary
- **Forge Orange** (#FF6B35): The single identity color. Used on section headings (h2), interactive accents, tags, the print button, and the drop cap. Carries all warmth and visual energy. Never used as a background fill at full opacity except on the print button and tag hover.

### Neutral
- **Charcoal Base** (#0a0a0a): Page background. Near-black with a barely perceptible warm undertone.
- **Carbon Surface** (#141414): Card backgrounds, contact items, language switcher. One tonal step above the base.
- **Raised Carbon** (#1a1a1a): Scrollbar thumbs. The lightest surface in the dark stack.
- **Warm Bone** (#F5F5F0): Primary text. Off-white with a yellow-warm cast, never clinical pure white.
- **Iron Gray** (#888888): Muted text, secondary labels, supporting copy. The workhorse neutral for body content.
- **Forge Orange Soft** (#FF6B3526, 15% opacity): Tag backgrounds, date badge fills. Forge Orange at low opacity for subtle accent surfaces.
- **Ghost Border** (#F5F5F014, 8% opacity): Section dividers, card borders, surface outlines. Warm Bone at near-invisible opacity.

**The One Flame Rule.** Forge Orange is the only saturated color on the page. It appears on section headings, interactive highlights, and the print button. If a second saturated hue enters the palette, the restraint contract is broken.

## 3. Typography

**Display Font:** Oswald (sans-serif fallback)
**Body Font:** Source Serif 4 (serif fallback)
**Label Font:** JetBrains Mono (monospace fallback)

**Character:** Three distinct voices in tight coordination. Oswald cuts sharp and loud for headings, all uppercase, condensed weight. Source Serif 4 reads warm and measured for body text. JetBrains Mono marks data, labels, and code-related content with mechanical precision. The pairing feels editorial and technical simultaneously, never decorative.

### Hierarchy
- **Display** (Oswald 700, clamp(3rem, 10vw, 7rem), line-height 1.1): The hero name. Used once per page for the candidate's full name.
- **Headline** (Oswald 700, clamp(1.5rem, 4vw, 2.5rem), line-height 1.1): Section headings (Experience, Education, Skills, About Me). Forge Orange color, uppercase. Each marks a new content territory.
- **Title** (Oswald 700, clamp(1.1rem, 2.5vw, 1.4rem), line-height 1.1): Job titles, degree names within cards. Warm Bone color, uppercase.
- **Body** (Source Serif 4 400, 1.05rem, line-height 1.6): Paragraphs, experience details, descriptions. Iron Gray color. Capped at 65ch max-width for reading comfort.
- **Label** (JetBrains Mono 500, 0.8rem, line-height 1.4, uppercase): Tags, contact labels, company names, date badges, footer text. Letter-spacing 0.05em. The mechanical voice for metadata.

**The Three Voices Rule.** Each font family has one job. Oswald heads, Source Serif reads, JetBrains labels. A heading set in Source Serif or a label set in Oswald means the hierarchy has collapsed.

## 4. Elevation

Flat by default. Depth comes from tonal steps between the three charcoal surfaces (base, surface, raised), not from shadows. Ghost Border hairlines separate sections and cards without visual weight.

The single exception: the print button floats with `box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3)`, a warm Forge Orange glow that marks it as detached from the page surface. On hover, the shadow deepens to `0 6px 30px rgba(255, 107, 53, 0.4)`.

**The Flat-By-Default Rule.** Shadows are prohibited except on fixed floating elements. Cards, sections, and content blocks convey depth through background color steps and border opacity, never through drop shadows.

## 5. Components

### Tags (Skill Chips)
- **Shape:** Gently curved (4px radius), compact padding (6px 13px)
- **Default:** Forge Orange Soft background, Forge Orange text, thin Forge Orange border at 25% opacity
- **Hover:** Fills entirely with Forge Orange, text inverts to Charcoal Base, lifts 2px upward. Responsive and tactile.
- **Font:** JetBrains Mono 0.8rem, uppercase

### Cards (Experience, Education)
- **Shape:** Gently curved (4px radius), generous padding (32px)
- **Background:** Carbon Surface (#141414)
- **Border:** Ghost Border (Warm Bone at 8% opacity)
- **Hover:** Lifts 4px upward, border warms to Forge Orange at 30% opacity
- **Layout:** Flex column with header row (title + date badge) and detail list below

### Date Badges
- **Shape:** Same radius as tags (4px), tight padding (5px 11px)
- **Style:** Forge Orange Soft background, Forge Orange text, JetBrains Mono 0.75rem
- **Purpose:** Inline metadata for time periods. Never interactive.

### Contact Items
- **Shape:** Gently curved (4px radius), standard padding (16px)
- **Background:** Carbon Surface
- **Border:** Ghost Border, warms on hover to Forge Orange at 30%
- **Layout:** Vertical stack of label (mono, small, muted) over value (serif, larger, white)

### Print Button
- **Shape:** Gently curved (4px radius), medium padding (12px 20px)
- **Background:** Forge Orange at full saturation
- **Text:** Charcoal Base, JetBrains Mono 0.85rem
- **Shadow:** Warm orange glow (0 4px 20px at 30% opacity)
- **Hover:** Lifts 2px, shadow deepens to 40% opacity
- **Position:** Fixed bottom-right, z-index 100. Hidden in print.

### Language Switcher
- **Shape:** Gently curved (4px radius), compact padding (6px 11px)
- **Background:** Carbon Surface, Ghost Border
- **Font:** JetBrains Mono 0.8rem
- **States:** Inactive links in Iron Gray, hover brightens to Warm Bone, active link in Forge Orange with weight 600
- **Position:** Fixed top-right, z-index 100. Hidden in print.

### Hero Section
- **Layout:** Full viewport height, centered content
- **Atmosphere:** Large radial gradient (70vw) positioned top-right, Forge Orange at 6% opacity. Subtle warm glow, never overt.
- **Animation:** Staggered fade-up reveals (0.1s intervals) using cubic-bezier(0.22, 1, 0.36, 1)

### Section Dividers
- **Treatment:** Single hairline border-top between consecutive sections, Ghost Border color. No decorative elements, no spacing ornaments.

## 6. Do's and Don'ts

### Do:
- **Do** use Forge Orange as the single saturated color. Section headings, tags, the print button, and the drop cap are its domain.
- **Do** separate surfaces with tonal steps (Charcoal Base, Carbon Surface, Raised Carbon) and Ghost Border hairlines, never with shadows.
- **Do** cap body text at 65ch and use Source Serif 4 for all readable paragraphs.
- **Do** add subtle hover lift (2px to 4px) and border warmth on interactive elements. The system is responsive and tactile.
- **Do** use the spacing doubling scale (8, 16, 32, 64, 96, 128px) for vertical rhythm.
- **Do** hide the print button and language switcher in print mode, and switch the palette to light theme with darker Forge Orange (#D44A1A).

### Don't:
- **Don't** use a second saturated color. One flame only.
- **Don't** apply drop shadows to cards or content sections. Shadows belong exclusively to the floating print button.
- **Don't** use Oswald for body text or Source Serif 4 for headings. The three voices stay in their lanes.
- **Don't** introduce bento grids, stock icons, or template-like section dividers. PRODUCT.md names these as anti-references: anything that signals "template" rather than "bespoke."
- **Don't** use pure white (#fff) or pure black (#000). Every neutral is tinted: Warm Bone and Charcoal Base carry subtle warmth.
- **Don't** use bounce or elastic easing curves. All motion uses cubic-bezier(0.22, 1, 0.36, 1) or similar exponential ease-out.
- **Don't** add decorative elements (ornaments, stock photos, background patterns) that do not convey information.
