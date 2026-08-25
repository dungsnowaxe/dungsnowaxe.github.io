import * as stylex from "@stylexjs/stylex";
import { colors, fonts, space } from "./tokens.stylex";

export const education = stylex.create({
  list: {
    display: "flex",
    flexDirection: "column",
    gap: space[5],
  },
  degree: {
    fontSize: "0.95rem",
    fontWeight: 600,
    fontVariationSettings: "'opsz' 20",
    lineHeight: 1.3,
    marginBottom: space[1],
  },
  school: {
    fontFamily: fonts.display,
    fontStyle: "italic",
    fontSize: "0.85rem",
    color: colors.accent,
    display: "block",
    marginBottom: "0.2rem",
  },
  period: {
    fontFamily: fonts.mono,
    fontSize: "0.66rem",
    letterSpacing: "0.06em",
    color: colors.textTertiary,
    display: "block",
    marginBottom: space[3],
  },
  desc: {
    fontSize: "0.8rem",
    lineHeight: 1.65,
    color: colors.textTertiary,
  },
});
