/**
 * Design tokens as StyleX vars. Values reference the CSS custom properties
 * defined in global.css so data-theme + print overrides keep working.
 */
import * as stylex from "@stylexjs/stylex";

export const colors = stylex.defineVars({
  bg: "var(--bg)",
  surface: "var(--surface)",
  surfaceRaised: "var(--surface-raised)",
  text: "var(--text)",
  textSecondary: "var(--text-secondary)",
  textTertiary: "var(--text-tertiary)",
  accent: "var(--accent)",
  accentStrong: "var(--accent-strong)",
  accentSoft: "var(--accent-soft)",
  accentSofter: "var(--accent-softer)",
  onAccent: "var(--on-accent)",
  border: "var(--border)",
  borderStrong: "var(--border-strong)",
  shadowAmbient: "var(--shadow-ambient)",
  shadowLifted: "var(--shadow-lifted)",
});

export const fonts = stylex.defineVars({
  display: "var(--font-display)",
  body: "var(--font-body)",
  mono: "var(--font-mono)",
});

export const space = stylex.defineVars({
  1: "var(--space-1)",
  2: "var(--space-2)",
  3: "var(--space-3)",
  4: "var(--space-4)",
  5: "var(--space-5)",
  6: "var(--space-6)",
  7: "var(--space-7)",
  8: "var(--space-8)",
  9: "var(--space-9)",
});

export const layout = stylex.defineVars({
  railWidth: "var(--rail-width)",
  containerMax: "var(--container-max)",
  radiusSm: "var(--radius-sm)",
  radiusMd: "var(--radius-md)",
  radiusLg: "var(--radius-lg)",
  easeOut: "var(--ease-out)",
  easeSpring: "var(--ease-spring)",
});
