import * as stylex from "@stylexjs/stylex";
import { colors, fonts, layout, space } from "./tokens.stylex";

export const skills = stylex.create({
  list: {
    display: "flex",
    flexDirection: "column",
    gap: space[5],
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: space[2],
  },
  tag: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    fontFamily: fonts.mono,
    fontSize: "0.68rem",
    fontWeight: 400,
    padding: "0.28rem 0.6rem",
    backgroundColor: colors.surface,
    color: colors.textSecondary,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.border,
    borderRadius: "999px",
    transitionProperty: "background-color, color, border-color, transform",
    transitionDuration: "0.3s",
    transitionTimingFunction: layout.easeSpring,
    ":hover": {
      backgroundColor: colors.accent,
      borderColor: colors.accent,
      color: colors.onAccent,
      transform: "translateY(-1px)",
    },
    ":active": {
      transform: "scale(0.97)",
    },
  },
  tagIcon: {
    width: "0.75rem",
    height: "0.75rem",
    flexShrink: 0,
    backgroundColor: "currentColor",
    maskSize: "contain",
    maskPosition: "center",
    maskRepeat: "no-repeat",
  },
});
