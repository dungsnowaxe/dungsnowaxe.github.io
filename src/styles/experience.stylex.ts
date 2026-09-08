import * as stylex from "@stylexjs/stylex";
import { colors, fonts, space } from "./tokens.stylex";

const MOBILE = "@media (max-width: 768px)";

export const experience = stylex.create({
  list: {
    display: "flex",
    flexDirection: "column",
  },
  entry: {
    display: "grid",
    gridTemplateColumns: {
      default: "2.5rem 1fr",
      [MOBILE]: "1fr",
    },
    gap: {
      default: space[4],
      [MOBILE]: space[2],
    },
    paddingBlock: space[7],
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: colors.border,
    ":first-child": {
      paddingTop: space[2],
    },
    ":last-child": {
      borderBottomWidth: 0,
      paddingBottom: 0,
    },
  },
  index: {
    fontFamily: fonts.mono,
    fontSize: "0.72rem",
    fontWeight: 500,
    color: colors.accent,
    paddingTop: {
      default: "0.35rem",
      [MOBILE]: 0,
    },
    fontVariantNumeric: "tabular-nums",
  },
  body: {
    minWidth: 0,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: {
      default: space[4],
      [MOBILE]: space[3],
    },
    marginBottom: space[4],
    flexDirection: {
      default: "row",
      [MOBILE]: "column",
    },
  },
  titleGroup: {
    display: "flex",
    flexDirection: "column",
    gap: space[2],
  },
  jobTitle: {
    color: colors.textSecondary,
    fontSize: "0.95rem",
    fontWeight: 500,
    letterSpacing: "0.01em",
  },
  dateBadge: {
    fontFamily: fonts.mono,
    fontSize: "0.75rem",
    letterSpacing: "0.04em",
    padding: "0.3rem 0.65rem",
    backgroundColor: colors.accentSofter,
    color: colors.accent,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.accentSoft,
    borderRadius: "999px",
    whiteSpace: "nowrap",
    flexShrink: 0,
    fontVariantNumeric: "tabular-nums",
  },
  details: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: space[3],
  },
  detail: {
    position: "relative",
    paddingLeft: "1.25rem",
    color: colors.textSecondary,
    fontSize: "0.9rem",
    lineHeight: 1.7,
    textWrap: "pretty",
    "::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: "0.72em",
      width: "0.6rem",
      height: "1px",
      backgroundColor: colors.accent,
    },
  },
});
