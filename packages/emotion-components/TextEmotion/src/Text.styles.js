import { css } from "@emotion/react"
import { isObjectEmpty, theme as defaultTheme } from "../../utils"

export const text = theme => css`
  color: ${(isObjectEmpty(theme) ? defaultTheme : theme).colors.text};
`
