import * as stylex from "@stylexjs/stylex";
import { colors, fonts, layout, space } from "./tokens.stylex";

const MOBILE = "@media (max-width: 768px)";

export const hero = stylex.create({
  root: {
    display: "grid",
    gridTemplateColumns: {
      default: "1fr 1fr",
      [MOBILE]: "1fr",
    },
    minHeight: {
      default: "100dvh",
      [MOBILE]: "auto",
    },
  },
  portrait: {
    position: "relative",
    overflow: "hidden",
  },
  portraitImg: {
    width: "100%",
    height: {
      default: "100dvh",
      [MOBILE]: "52dvh",
    },
    objectFit: "cover",
    objectPosition: "center 20%",
  },
  content: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: {
      default: `${space[9]} ${space[8]}`,
      [MOBILE]: `${space[7]} ${space[4]} calc(${space[7]} + env(safe-area-inset-bottom))`,
    },
    "::before": {
      content: '""',
      position: "absolute",
      top: "12%",
      right: "-10%",
      width: "60%",
      aspectRatio: "1",
      background: `radial-gradient(circle, ${colors.accentSoft} 0%, transparent 70%)`,
      pointerEvents: "none",
    },
  },
  eyebrow: {
    display: "flex",
    alignItems: "center",
    gap: space[3],
    fontFamily: fonts.mono,
    fontSize: "0.7rem",
    textTransform: "uppercase",
    letterSpacing: "0.22em",
    color: colors.accent,
    marginBottom: space[5],
    "::before": {
      content: '""',
      width: "2rem",
      height: "1px",
      backgroundColor: colors.accent,
    },
  },
  name: {
    fontSize: {
      default: "clamp(2.75rem, 6vw, 5rem)",
      [MOBILE]: "clamp(2.25rem, 9vw, 3.25rem)",
    },
    fontWeight: 480,
    fontVariationSettings: "'opsz' 144",
    letterSpacing: "-0.02em",
    lineHeight: 1.02,
    color: colors.text,
    marginBottom: {
      default: space[8],
      [MOBILE]: space[6],
    },
  },
  links: {
    display: "flex",
    flexWrap: "wrap",
    gap: space[3],
  },
  link: {
    display: "inline-flex",
    alignItems: "center",
    gap: space[2],
    fontFamily: fonts.mono,
    fontSize: "0.75rem",
    letterSpacing: "0.03em",
    padding: "0.7rem 1.15rem",
    borderRadius: "999px",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.border,
    color: colors.textSecondary,
    backgroundColor: "transparent",
    textDecoration: "none",
    transitionProperty: "color, border-color, background-color, transform, box-shadow",
    transitionDuration: "0.3s",
    transitionTimingFunction: layout.easeSpring,
    flex: {
      default: "0 1 auto",
      [MOBILE]: "1 1 auto",
    },
    justifyContent: {
      default: "flex-start",
      [MOBILE]: "center",
    },
    minHeight: {
      default: "auto",
      [MOBILE]: "44px",
    },
    ":hover": {
      color: colors.text,
      borderColor: colors.borderStrong,
      backgroundColor: colors.surface,
      transform: "translateY(-2px)",
      opacity: 1,
    },
    ":active": {
      transform: "translateY(0) scale(0.98)",
    },
  },
  linkPrimary: {
    backgroundColor: colors.accent,
    color: colors.onAccent,
    borderColor: "transparent",
    fontWeight: 500,
    padding: "0.45rem 0.45rem 0.45rem 1.25rem",
    gap: space[3],
    boxShadow: colors.shadowAmbient,
    flex: {
      default: "0 1 auto",
      [MOBILE]: "1 1 100%",
    },
    justifyContent: {
      default: "flex-start",
      [MOBILE]: "space-between",
    },
    ":hover": {
      backgroundColor: colors.accentStrong,
      color: colors.onAccent,
      borderColor: "transparent",
      boxShadow: colors.shadowLifted,
    },
  },
  linkIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2rem",
    height: "2rem",
    borderRadius: "999px",
    backgroundColor: "color-mix(in oklch, var(--on-accent) 18%, transparent)",
    transitionProperty: "transform",
    transitionDuration: "0.35s",
    transitionTimingFunction: layout.easeSpring,
    transform: {
      default: "none",
      [stylex.when.ancestor(":hover")]: "translate(2px, -2px) scale(1.05)",
    },
  },
  linkSvg: {
    flexShrink: 0,
  },
});
