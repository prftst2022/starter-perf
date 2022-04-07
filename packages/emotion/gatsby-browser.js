import React from "react"
import { ThemeProvider } from "@emotion/react"

const theme = {
  colors: {
    primary: "#005b99",
    text: "#2e353f",
    textLight: "#4f5969",
    heading: "#1a202c",
    headingBlack: "black",
    accent: "#d1dce5",
    bgColor: "#e0e0e0",
  },
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
