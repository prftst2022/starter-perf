import { css } from "@emotion/react"
import { isObjectEmpty, theme as defaultTheme } from "../../utils"

export const space = theme => css`
  width: ${(isObjectEmpty(theme) ? defaultTheme : theme).spacing.m};
`
