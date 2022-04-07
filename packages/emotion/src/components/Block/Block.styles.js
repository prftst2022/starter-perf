import { css } from "@emotion/react"

export const blockWrapper = theme =>
  css`
    background-color: ${theme.colors.bgColor};
    padding: 20px;
    color: ${theme.colors.primary};
  `
