import { css } from "@emotion/react"

export const avatar = theme => css`
  background-color: ${theme.colors.avatar};
  border-radius: 100%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const unusedClass = theme => css`
  background-color: ${theme.colors.avatar};
  border-radius: 100%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${theme.spacing.l};
  border: 1px solid ${theme.colors.heading};
  padding: ${theme.spacing.s};
  margin-bottom: ${theme.spacing.m};
`
