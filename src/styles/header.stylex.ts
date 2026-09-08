import * as stylex from "@stylexjs/stylex";
import { colors, fonts, layout, space } from "./tokens.stylex";

export const header = stylex.create({
  header: {
    display: "flex",
    flexDirection: "column",
    gap: space[6],
  },
  nameBlock: {
    display: "flex",
    flexDirection: "column",
    gap: space[3],
  },
  jobTitle: {
    fontFamily: fonts.display,
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: "1.05rem",
    color: colors.accent,
    letterSpacing: "0.01em",
    maxWidth: "none",
  },
  contactList: {
    display: "flex",
    flexDirection: "column",
    gap: space[3],
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: space[3],
    color: colors.textSecondary,
    textDecoration: "none",
    transitionProperty: "color",
    transitionDuration: "0.25s",
    transitionTimingFunction: layout.easeOut,
    ":hover": {
      color: colors.accent,
      opacity: 1,
    },
  },
  contactSvg: {
    flexShrink: 0,
    marginTop: "1px",
  },
  contactText: {
    display: "flex",
    flexDirection: "column",
    gap: "0.1rem",
    minWidth: 0,
  },
  contactLabel: {
    fontFamily: fonts.mono,
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    color: colors.textSecondary,
  },
  contactValue: {
    fontSize: "0.82rem",
    fontWeight: 500,
    color: {
      default: colors.textSecondary,
      [stylex.when.ancestor(":hover")]: colors.accent,
    },
    wordBreak: "break-word",
    transitionProperty: "color",
    transitionDuration: "0.25s",
    transitionTimingFunction: layout.easeOut,
  },
});
