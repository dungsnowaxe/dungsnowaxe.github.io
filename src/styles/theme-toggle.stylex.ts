import * as stylex from "@stylexjs/stylex";
import { colors, layout } from "./tokens.stylex";

const PRINT = "@media print";
const MOBILE = "@media (max-width: 768px)";

export const themeToggle = stylex.create({
  control: {
    display: {
      default: "flex",
      [PRINT]: "none",
    },
    alignItems: "center",
    gap: "2px",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.border,
    borderRadius: "999px",
    padding: "2px",
  },
  mode: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: {
      default: "2rem",
      [MOBILE]: 44,
    },
    height: {
      default: "2rem",
      [MOBILE]: 44,
    },
    backgroundColor: "transparent",
    borderWidth: 0,
    borderRadius: "999px",
    cursor: "pointer",
    color: colors.textTertiary,
    transitionProperty: "color, background-color, transform",
    transitionDuration: "0.3s",
    transitionTimingFunction: layout.easeSpring,
    ":hover": {
      color: colors.text,
    },
    ":active": {
      transform: "scale(0.92)",
    },
  },
});
