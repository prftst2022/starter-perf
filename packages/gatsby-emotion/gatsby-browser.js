import React from "react"
import { ThemeProvider } from "@emotion/react"

const theme = {
  colors: {
    primary: "#0f84d4",
    text: "#2e353f",
    textLight: "#4f5969",
    heading: "#1a202c",
    headingBlack: "black",
    accent: "#d1dce5",
    bgColor: "#e0e0e0",
    avatar: "#88BF91",
  },
  spacing: {
    s: "8px",
    m: "16px",
    l: "24px",
    xl: "32px",
  },
  borderRadius: {
    xs: "4px",
    s: "8px",
    m: "12px",
  },
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
