import * as stylex from "@stylexjs/stylex";
import { colors, fonts, space } from "./tokens.stylex";

export const footer = stylex.create({
  footer: {
    padding: `${space[8]} 0 ${space[4]}`,
    textAlign: "center",
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: colors.border,
    marginTop: space[7],
  },
  text: {
    fontFamily: fonts.mono,
    fontSize: "0.7rem",
    letterSpacing: "0.06em",
    color: colors.textTertiary,
    marginBottom: space[2],
  },
  sub: {
    fontFamily: fonts.display,
    fontSize: "0.9rem",
    color: colors.textTertiary,
    fontStyle: "italic",
  },
});
