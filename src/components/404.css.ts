import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"

export const link = style({
  fontSize: theme.fontSizes[3],
  fontWeight: theme.fontWeights.bold,
  textAlign: "center",
  color: "inherit",
  display: "flex",
  alignItems: "baseline",
  justifyContent: "center",
  gap: "10px",
})

export const linkChevron = style({
  height: "12px",
})

export const text = style({
  fontSize: theme.fontSizes[4],
  textAlign: "center",
  marginBottom: -30,
})

export const image = style({
  width: "100%",
  height: "auto",
  maxWidth: "400px",
  margin: "0 auto",
  display: "block",
})