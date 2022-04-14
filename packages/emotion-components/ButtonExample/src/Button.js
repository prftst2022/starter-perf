/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { isObjectEmpty, theme as defaultTheme } from "../../utils"

export const button = theme => css`
  background-color: ${(isObjectEmpty(theme) ? defaultTheme : theme).colors
    .primary};
  padding: ${(isObjectEmpty(theme) ? defaultTheme : theme).spacing.s};
  font-size: 16px;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  line-height: 20px;
  outline: none;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  margin: 15px;
  &:hover,
  &:focus {
    background-color: ${(isObjectEmpty(theme) ? defaultTheme : theme).colors
      .textLight};
  }
`

const StyledButton = props => {
  console.log("props", props)
  return (
    <button type="button" aria-label={`click on button `} css={button}>
      Click me
    </button>
  )
}

export default StyledButton
