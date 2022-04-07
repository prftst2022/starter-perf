import { css } from "@emotion/react"

export const blockWrapper = theme =>
  css`
    background-color: ${theme.colors.bgColor};
    padding: ${theme.spacing.m};
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.m};
    border-radius: ${theme.borderRadius.xs};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  `

export const blockHeader = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
