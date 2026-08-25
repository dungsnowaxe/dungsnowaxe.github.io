import * as stylex from "@stylexjs/stylex";
import { colors } from "./tokens.stylex";

export const about = stylex.create({
  aboutText: {
    fontSize: "0.875rem",
    lineHeight: 1.75,
    color: colors.textSecondary,
  },
});
