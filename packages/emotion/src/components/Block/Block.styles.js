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
export const blockBody = css`
  display: flex;
  width: 100%;
`
export const list = theme => css`
  font-size: 20px;
  color: ${theme.colors.heading};
  display: flex;
`
export const listItem = theme => css`
  margin-left: ${theme.spacing.l};
  border: 1px solid ${theme.colors.heading};
  padding: ${theme.spacing.s};
  margin-bottom: ${theme.spacing.m};
`
