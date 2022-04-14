import styled from "@emotion/styled"
import isPropValid from "@emotion/is-prop-valid"
import { isObjectEmpty, theme as defaultTheme } from "../../utils"

const StyledButton = props => {
  console.log("props", props)
  const { theme } = props
  const themeToUse = isObjectEmpty(theme) ? defaultTheme : theme

  return {
    backgroundColor: `${themeToUse.colors.primary}`,
    padding: `${themeToUse.spacing.s}`,
    fontSize: "16px",
    borderRadius: "8px",
    borderStyle: "none",
    boxSizing: "border-box",
    color: "#ffffff",
    cursor: "pointer",
    display: "inline-block",
    fontWeight: "500",
    lineDeight: "20px",
    outline: "none",
    position: "relative",
    textAlign: "center",
    textDecoration: "none",
    transitionColor: "100ms",
    verticalAlign: "baseline",
    margin: "15px",
    "&:hover": {
      backgroundColor: `${themeToUse.colors.textLight}`,
    },
    "&:focus": {
      backgroundColor: `${themeToUse.colors.textLight}`,
    },
  }
}

const buttonConfig = {
  shouldForwardProp: prop => isPropValid(prop),
}

export default styled("button", buttonConfig)(StyledButton)
