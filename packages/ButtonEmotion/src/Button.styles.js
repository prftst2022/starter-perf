import { css } from "@emotion/react"

export const button = theme => css`
  background-color: ${theme.colors.primary};
  padding: ${theme.spacing.s};
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
  &:hover,
  &:focus {
    background-color: ${theme.colors.textLight};
  }
`
