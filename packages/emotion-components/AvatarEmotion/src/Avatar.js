/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { isObjectEmpty, theme as defaultTheme } from "../../utils"

export const avatar = theme => css`
  background-color: ${(isObjectEmpty(theme) ? defaultTheme : theme).colors
    .avatar};
  border-radius: 100%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const unusedClass = theme => css`
  background-color: ${(isObjectEmpty(theme) ? defaultTheme : theme).colors
    .avatar};
  border-radius: 100%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(isObjectEmpty(theme) ? defaultTheme : theme).spacing.l};
  border: 1px solid
    ${(isObjectEmpty(theme) ? defaultTheme : theme).colors.heading};
  padding: ${(isObjectEmpty(theme) ? defaultTheme : theme).spacing.s};
  margin-bottom: ${(isObjectEmpty(theme) ? defaultTheme : theme).spacing.m};
`

const Avatar = ({ number }) => {
  return <div css={avatar}>{number + Math.floor(Math.random() * 100)}</div>
}

export default Avatar
