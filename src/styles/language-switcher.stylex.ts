import * as stylex from "@stylexjs/stylex";
import { colors, fonts, layout, space } from "./tokens.stylex";

const PRINT = "@media print";

export const languageSwitcher = stylex.create({
  switcher: {
    display: {
      default: "flex",
      [PRINT]: "none",
    },
    alignItems: "center",
    gap: "0.35rem",
    fontFamily: fonts.mono,
    fontSize: "0.68rem",
    paddingInline: space[3],
  },
  link: {
    position: "relative",
    color: colors.textTertiary,
    textDecoration: "none",
    letterSpacing: "0.08em",
    transitionProperty: "color",
    transitionDuration: "0.25s",
    transitionTimingFunction: layout.easeOut,
    padding: "0.6rem 0.15rem",
    minHeight: "44px",
    display: "inline-flex",
    alignItems: "center",
    "::after": {
      content: '""',
      position: "absolute",
      left: "0.15rem",
      right: "0.15rem",
      bottom: "0.45rem",
      height: "1px",
      backgroundColor: colors.accent,
      transform: "scaleX(0)",
      transformOrigin: "left",
      transitionProperty: "transform",
      transitionDuration: "0.3s",
      transitionTimingFunction: layout.easeSpring,
    },
    ":hover": {
      color: colors.text,
      opacity: 1,
    },
  },
  active: {
    color: colors.accent,
    fontWeight: 600,
    "::after": {
      transform: "scaleX(1)",
    },
  },
  divider: {
    width: "1px",
    height: "0.9rem",
    backgroundColor: colors.borderStrong,
  },
});
