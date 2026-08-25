import * as stylex from "@stylexjs/stylex";
import { colors, fonts, layout, space } from "./tokens.stylex";

const MOBILE = "@media (max-width: 768px)";
const PRINT = "@media print";

export const printButton = stylex.create({
  button: {
    position: "fixed",
    bottom: {
      default: space[5],
      [MOBILE]: `calc(${space[4]} + env(safe-area-inset-bottom))`,
    },
    right: {
      default: space[5],
      [MOBILE]: `calc(${space[4]} + env(safe-area-inset-right))`,
    },
    zIndex: 100,
    display: {
      default: "flex",
      [PRINT]: "none",
    },
    alignItems: "center",
    gap: space[2],
    padding: "0.35rem 0.35rem 0.35rem 1.1rem",
    backgroundColor: colors.accent,
    color: colors.onAccent,
    borderWidth: 0,
    borderRadius: "999px",
    fontFamily: fonts.mono,
    fontSize: "0.72rem",
    fontWeight: 500,
    letterSpacing: "0.04em",
    cursor: "pointer",
    boxShadow: colors.shadowLifted,
    transitionProperty: "transform, box-shadow, background-color",
    transitionDuration: "0.35s",
    transitionTimingFunction: layout.easeSpring,
    ":hover": {
      transform: "translateY(-2px)",
      backgroundColor: colors.accentStrong,
    },
    ":active": {
      transform: "translateY(0) scale(0.98)",
    },
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "1.9rem",
    height: "1.9rem",
    borderRadius: "999px",
    backgroundColor: "color-mix(in oklch, var(--on-accent) 18%, transparent)",
    transitionProperty: "transform",
    transitionDuration: "0.35s",
    transitionTimingFunction: layout.easeSpring,
    transform: {
      default: "none",
      [stylex.when.ancestor(":hover")]: "translateY(1px) scale(1.06)",
    },
  },
});
