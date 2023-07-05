import { createGlobalTheme } from "@vanilla-extract/css"
import { colors } from "./colors.css"

export type SpaceTokens = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type Space = Record<SpaceTokens, string>

const space = {
  0: "0",
  1: "4px",
  2: "8px",
  3: "16px",
  4: "32px",
  5: "64px",
  6: "128px",
}

// add negative margins
Object.assign(
  space,
  Object.entries(space).reduce(
    (a, [key, val]) => ({
      ...a,
      [-1 * Number(key)]: `-${val}`,
    }),
    {}
  )
)

const fontSizes = {
  0: "12px",
  1: "14px",
  2: "16px",
  3: "18px",
  4: "24px",
  5: "32px",
  6: "48px",
  7: "64px",
}

const fontWeights = {
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
}

const fonts = {
  text: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  heading: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  mono: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
}

const lineHeights = {
  text: "1.65",
  heading: "1.25",
  tight: "1.1",
  solid: "1",
}

const letterSpacings = {
  normal: "-0.015em",
  tight: "-0.025em",
  wide: "0.1em",
}

const sizes = {
  container: "1280px",
  narrow: "1024px",
  wide: "1440px",
  tight: "848px",
  avatar: "48px",
  navGroupBoxMin: "300px",
  navGroupBoxMax: "400px",
  navIcon: "32px",
  navIconSmall: "30px",
}

export type Radii = "button" | "large" | "circle"

const radii: Record<Radii, string> = {
  button: "10px",
  large: "24px",
  circle: "99999px",
}

const shadows = {
  large:
    "0px 4px 8px 0px #2E29330A, 0px 4px 24px 0px #2E293314, 0px 8px 24px 0px #473F4F29",
}

// 그라데이션 스타일 정의
const gradient = {
  background: "linear-gradient(to left, #EE3324, #FF9068)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}

export const theme = createGlobalTheme(":root", {
  colors,
  space,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  letterSpacings,
  sizes,
  radii,
  shadows,
  gradient,
})
